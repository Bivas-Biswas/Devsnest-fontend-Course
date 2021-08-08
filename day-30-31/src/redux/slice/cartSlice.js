import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const product = { ...action.payload, quantity: 1 }
            const allItems = state.items
            const currentItems = state.items.filter(item => item.id === product.id)

            if (currentItems.length > 0) {
                const newItems = allItems.map(item => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })

                return { ...state, items: newItems }
            } else {
                return {
                    items: [...state.items, product]
                }
            }
        },
        clearItem: (state) => {
            return { ...state, items: [] }
        },
        changeQuantity: (state, action) => {
            const { id, isIncrease } = action.payload

            const newItems = state.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: isIncrease ? item.quantity + 1 : item.quantity - 1
                    }
                } else {
                    return item
                }
            })

            return { ...state, items: newItems }
        }
    }

})

const { actions, reducer } = cartSlice

export const { addItem, clearItem, changeQuantity } = actions

export default reducer