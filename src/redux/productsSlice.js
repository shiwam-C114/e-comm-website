import { createSlice } from "@reduxjs/toolkit";


async function getData() {
    const res = await  fetch('https://demo-e-comm-data.herokuapp.com/products?_page=1');
    const data = await res.json();
    return data; 
}

export const productsSlice = createSlice({
    name:"products",
    initialState: {value: await getData()},
    reducers:{}
})

export const selectProducts = (state) => state.products.value

export default productsSlice.reducer
