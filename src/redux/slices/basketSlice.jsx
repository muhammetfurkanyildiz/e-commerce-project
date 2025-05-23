import { createSlice } from "@reduxjs/toolkit";

const readBasketFromLocalStorage = () => {
    const basket = localStorage.getItem("basket");
    if (basket) {
        return JSON.parse(basket);
    }
    return [];
}

const writeBasketToLocalStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}

const initialState = {
    items: readBasketFromLocalStorage(),
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findItem = state.items && state.items.find((item) => item.id === action.payload.id);

            if (findItem) {
                // daha önceden eklenmiştir.
                const extractedItems = state.items.filter((item) => item.id !== action.payload.id);
                findItem.count += action.payload.count || 1;
                state.items = [...extractedItems, findItem];
            } else {
                // yeni ekleniyor
                state.items = [...state.items, { ...action.payload, count: action.payload.count || 1 }];
            }

            writeBasketToLocalStorage(state.items);
        }


        ,
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
            writeBasketToLocalStorage(state.items);
        },
        clearBasket: (state) => {
            state.items = [];
            writeBasketToLocalStorage(state.items);
        },
    },
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
