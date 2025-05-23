import React, { useState, useRef, useEffect } from "react";
import { VscSearch } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import Drawer from '@mui/material/Drawer';

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [theme, setTheme] = useState(true);
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    const { items } = useSelector((store) => store.basket);

    const [open, setOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // 50px üstten aşağı inince küçül
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
    };

    const toggleTheme = () => {
        const root = document.getElementById("root");

        setTheme((prev) => !prev);
        if (theme) {
            root.style.backgroundColor = "#222831";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav
                className={`navbar flex justify-between items-center text-black-500 p-4 mr-5 ${isScrolled ? "shadow-md" : ""
                    }`}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isScrolled ? "60px" : "80px",
                    paddingTop: isScrolled ? "0.5rem" : "1rem",
                    paddingBottom: isScrolled ? "0.5rem" : "1rem",
                    zIndex: 1000,
                }}
            >
                <div className="nav-links">
                    <ul className="flex gap-4">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="logo cursor-pointer">
                    <img
                        src={theme ? "./src/assets/logo_black.png" : "./src/assets/logo_white.png"}
                        alt="Logo"
                        className="w-[150px] h-[150px]"
                        onClick={() => navigate("/")}
                    />
                </div>

                <div ref={wrapperRef} className="cart flex items-center gap-4 relative">
                    <VscSearch onClick={toggleSearch} className="cursor-pointer" size={24} />
                    <CiUser className="cursor-pointer" size={27} />
                    <Badge badgeContent={items ? items.reduce((total, item) => total + item.count, 0) : 0} color="primary">
                        <SlBasketLoaded className="cursor-pointer" size={24} onClick={toggleDrawer(true)} />
                    </Badge>
                    <Drawer
                        open={open}
                        onClose={toggleDrawer(false)}
                        anchor="right"
                        PaperProps={{
                            sx: {
                                width: 350,
                                bgcolor: theme ? "#1e1e1e" : "#fff",
                                color: theme ? "#fff" : "#000",
                                padding: 3,
                                boxShadow: "rgba(0, 0, 0, 0.25) 0px 8px 24px",
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                                transition: "transform 0.3s ease-in-out",
                            }
                        }}
                    >
                        {/* Drawer içeriği buraya */}
                        <h2 className="text-xl font-semibold mb-4">Your Basket</h2>
                        {/* Örnek ürün listesi */}
                        {items && items.length > 0 ? (
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index} className="mb-2 border-b border-gray-500 pb-2">
                                        <span>{item.name}</span> - <span>Qty: {item.count}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your basket is empty</p>
                        )}
                    </Drawer>

                    {theme ? (
                        <IoMoonOutline className="cursor-pointer" size={24} onClick={toggleTheme} />
                    ) : (
                        <MdOutlineWbSunny className="cursor-pointer" size={24} onClick={toggleTheme} />
                    )}

                    {showSearch && (
                        <div className="search-bar absolute top-12 right-0 bg-myblack-500 shadow-lg p-4 rounded border-none text-white h-[50px] flex items-center z-10">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 border-none bg-myblack-500 rounded outline-none h-[30px]"
                                autoFocus
                            />
                        </div>
                    )}
                </div>
            </nav>
            <div style={{ height: isScrolled ? 60 : 80 }}></div>
        </div>
    );
}

export default Header;
