import { Search } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState:{
        genreIdOrCategoryName:'',
        page:1,
        SearchQuery:'',
    },
    reducers:{
        selectGenreOrCategory: (state, action) =>{
            state.genreIdOrCategoryName = action.payload;
        }
    }
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;