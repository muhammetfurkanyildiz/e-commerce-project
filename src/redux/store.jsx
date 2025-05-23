import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/AppSlice'
import productReducer from './slices/ProductSlice'
import basketReducer from './slices/basketSlice'
export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer,

    },
})