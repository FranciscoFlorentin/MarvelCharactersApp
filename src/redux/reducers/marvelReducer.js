import {createSlice} from '@reduxjs/toolkit';

const marvelReducer = createSlice({
    name: 'marvel',
    initialState: {
        favouriteCharacters: [],
    },
    reducers: {
        addFavCharacter: (state, {payload}) => {
            state.favouriteCharacters=[...state.favouriteCharacters,payload]
        },
        removeFavCharacter: (state,{payload})=>{
            state.favouriteCharacters=state.favouriteCharacters.filter(character=>character.id!=payload.id)
        }
    },
    extraReducers: {
    },
  });
  
  export const {addFavCharacter,removeFavCharacter} = marvelReducer.actions;
  export default marvelReducer.reducer;
  