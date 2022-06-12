import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MarvelCharactersResponse, MarvelCharacter } from '../interfaces/charactersInterface';
import marvelDB from '../api/marvelDB';

/**
 * useMarvelCharacters
 * Custom Hook to handle marvelDB information 
 */
export const useMarvelCharacters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [marvelCharacters, setMarvelCharacters] = useState<MarvelCharacter[]>([])
  
  useEffect( function useEffect_useMarvel() {
    getMarvelCharacters();
  }, []);
  
  async function getMarvelCharacters(){
    const response = await marvelDB.get<MarvelCharactersResponse>('/characters');
    if(response) {
      setMarvelCharacters(response.data.data.results)
      setIsLoading(false);
    }
  }

  return {
    marvelCharacters,
    isLoading
  }
}