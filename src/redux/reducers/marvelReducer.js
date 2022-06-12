import {createSlice} from '@reduxjs/toolkit';

const marvelReducer = createSlice({
    name: 'marvel',
    initialState: {
        favoriteCharacters: [],
    },
    reducers: {
        addFavCharacter: (state, {payload}) => {
            state.favoriteCharacters=[...state.favoriteCharacters,payload]
        },
        removeFavCharacter: (state,{payload})=>{
            state.favoriteCharacters=state.favoriteCharacters.filter(character=>character.id!=payload.id)
        }
    },
    extraReducers: {
    },
  });
  
  export const {addFavCharacter,removeFavCharacter} = marvelReducer.actions;
  export default marvelReducer.reducer;
  