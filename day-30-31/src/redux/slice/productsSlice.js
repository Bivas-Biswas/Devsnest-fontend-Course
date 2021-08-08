import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/getProducts";

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    getProducts
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        item: []
    },
    reducers: {},
    extraReducers: {
        [fetchAllProducts.pending]: state => ({
            ...state,
            loading: true
        }),
        [fetchAllProducts.fulfilled]: (state, action) => ({
            ...state,
            loading: false,
            item: [...state.item, ...action.payload]
        })
    }
})

const { actions, reducer } = productsSlice

export const { saveItems } = actions

export default reducer