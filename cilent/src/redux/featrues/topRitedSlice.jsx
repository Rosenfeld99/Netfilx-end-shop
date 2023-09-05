import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../constant/url";

export const getMoviesTopRited = createAsyncThunk('moviesTopRited/getMoviesTopRited',async(thunkAPI)=>{
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=he`);
        return data;
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    moviesTopRited:[],
    loading : true,
    error : null
}

const topRitedSlice = createSlice({
    name:'moviesTopRited',
    initialState,
    extraReducers:(builder)=>{
        builder 
        .addCase(getMoviesTopRited.pending ,(state,action) =>{
            state.loading = true;
        })
        .addCase(getMoviesTopRited.fulfilled,(state,action) =>{
            state.moviesTopRited = action.payload;
            state.loading = false;
        })
        .addCase(getMoviesTopRited.rejected,(state,action) =>{
            state.error = action.payload;
            state.loading = false;
        })
    },
    reducers:{}
})

export default topRitedSlice.reducer;