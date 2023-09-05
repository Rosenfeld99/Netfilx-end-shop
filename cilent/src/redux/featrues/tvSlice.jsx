import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../constant/url";

export const getTv_Ar = createAsyncThunk('tv_Ar/getTv_Ar',async(keys,thunkAPI)=>{
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/${keys.type}/${keys.sort}?api_key=${API_KEY}&language=he`);
        return data;
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    tv_Ar:[],
    loading : true,
    error : null
}

const tvReducer = createSlice({
    name:'tv_Ar',
    initialState,
    extraReducers:(builder)=>{
        builder 
        .addCase(getTv_Ar.pending ,(state,action) =>{
            state.loading = true;
        })
        .addCase(getTv_Ar.fulfilled,(state,action) =>{
            state.tv_Ar = action.payload;
            state.loading = false;
        })
        .addCase(getTv_Ar.rejected,(state,action) =>{
            state.error = action.payload;
            state.loading = false;
        })
    },
    reducers:{}
})

export default tvReducer.reducer;