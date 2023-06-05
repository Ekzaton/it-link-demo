import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Item } from "@/types/common";

export const fetchAllItems = createAsyncThunk('items/fetchAllItems', async () => {
    const response = await fetch('https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items');

    return await response.json();
})

export const addItem = createAsyncThunk('items/addItem', async (data: Item) => {
    const response = await fetch(`https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
    })

    return await response.json();
})

export const editItem = createAsyncThunk('items/editItem', async (data: Item) => {
    const response = await fetch(`https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
    })

    return await response.json();
})

export const deleteItem = createAsyncThunk('items/deleteItem', async (id: number) => {
    await fetch(`https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    })

    return id;
})

const initialState = {
    list: [] as Item[],
    searchQuery: '',
    searchType: 'brand',
};

const items = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setList: (state, action) => state.list = action.payload,
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSearchType: (state, action) => {
            state.searchType = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchAllItems.fulfilled,
            (state, action) => {
                state.list = action.payload;
            }
        )
        builder.addCase(
            addItem.fulfilled,
            (state, action) => {
                state.list.push(action.payload);
            }
        )
        builder.addCase(
            editItem.fulfilled,
            (state, action) => {
                const index = state.list.findIndex((item) => item.id === action.payload.id)
                state.list.splice(index, 1, action.payload);
            }
        )
        builder.addCase(
            deleteItem.fulfilled,
            (state, action) => {
                const index = state.list.findIndex((item) => item.id === action.payload)
                state.list.splice(index, 1);
            }
        )
    }
});

export const { setList, setSearchQuery, setSearchType } = items.actions;
export default items.reducer;
