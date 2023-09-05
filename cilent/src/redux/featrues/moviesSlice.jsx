import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../constant/url";

export const fetchMovies = createAsyncThunk('fetchMovies/getfetchMovies',async(bodyData,thunkAPI)=>{
    try {
      
        const popular = {}
        const upcoming ={}
        const topRated ={}
        const nowPlaying ={}
        popular.list = (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=he`)).data.results;
        popular.title = "בקרוב"
        upcoming.list = (await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=he`)).data.results;
        upcoming.title = "פופולי ב-Netflix"
        topRated.list = (await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=he`)).data.results;
        topRated.title = "בדירוג גבוהה"
        nowPlaying.list = (await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=he`)).data.results;
        nowPlaying.title = "המשך צפיה"


        return [popular,upcoming,topRated,nowPlaying];
    } catch (error) {
        thunkAPI.rejectWithValue(error)
        console.log(error);
    }
})
// const categories = [{name:"popular"},{name:"upcoming"},{name:"top_rated"},{name:"now_playing"}]

const initialState = {
    movies:[],
    loading : true,
    status : false,
    error : null
}

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    extraReducers:(builder)=>{
        builder 
        .addCase(fetchMovies.pending ,(state,action) =>{
            state.loading = true;
        })
        .addCase(fetchMovies.fulfilled,(state,action) =>{
            state.movies = action.payload;
            state.loading = false;
            console.log(action.payload);
        })
        .addCase(fetchMovies.rejected,(state,action) =>{
            state.error = action.payload;
            state.loading = false;
        })
    },
    reducers:{}
})

export default moviesSlice.reducer;