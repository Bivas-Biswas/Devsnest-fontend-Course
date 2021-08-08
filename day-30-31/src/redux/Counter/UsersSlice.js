import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: null,
    },
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = 'success'
        },
        [getUsers.rejected]: (state, action) => {
            state.status = "failed"
        }

    }
})

export default usersSlice.reducer