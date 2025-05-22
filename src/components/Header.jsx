import React, { useState, useRef, useEffect } from "react";
import { VscSearch } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";





function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [theme, setTheme] = useState(true);
    const wrapperRef = useRef(null);



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
                setShowSearch(false); // Dışarı tıklanırsa kapat
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav className="navbar flex justify-between items-center text-black-500 p-4">
                <div className="nav-links">
                    <ul className="flex gap-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>

                <div className="logo">
                    <img
                        src={theme ? "./src/assets/logo_black.png" : "./src/assets/logo_white.png"}
                        alt="Logo"
                        className="w-[150px] h-[150px]"
                    />

                </div>

                {/* Arama ve ikonları birlikte sarmalayan div */}
                <div
                    ref={wrapperRef}
                    className="cart flex items-center gap-4 relative"
                >
                    <VscSearch
                        onClick={toggleSearch}
                        className="cursor-pointer"
                        size={24}
                    />
                    <CiUser className="cursor-pointer" size={27} />
                    <SlBasketLoaded className="cursor-pointer" size={24} />
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
        </div>
    );
}

export default Header;
