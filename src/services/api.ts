import axios from 'axios';
import { API_KEY } from './constants';
import { Movie, SearchParams, SearchResult } from '@/types/types';


const BASE_URL: string = `https://www.omdbapi.com/?apikey=${API_KEY}`;



export const searchMovies = async ({ searchQuery, page = 1, type }: SearchParams): Promise<SearchResult> => {
  const url = `${BASE_URL}&s=${searchQuery}&page=${page}${type? `&type=${type}`: ''}`;
  if (!searchQuery) {
    return {
      Search: [],
      totalResults: '0',
      Response: 'False',
    }
  }
  
  try {
    const response = await axios.get(url);
    const { data } = response;
      return {
        ...data
      };
  } catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  throw new Error("Unknown error occurred");
}
};

export const getMovieDetails = async (id: string): Promise<Movie> => {
  const url = `${BASE_URL}&i=${id}`;
  try {
    const response = await axios.get(url);
    const { data } = response;
      return data;
  } catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  throw new Error("Unknown error occurred");
}
};
