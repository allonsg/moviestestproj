import getLocal from '@/services/localStorage/getLocal';
import { Movie } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface FavoritesMoviesState {
  movies: Movie[];
}

const getInitialState = (): FavoritesMoviesState => {
  const favoritesMoviesArr = getLocal({item: 'favoritesMovies', type: '[]'});

  return favoritesMoviesArr? { movies: favoritesMoviesArr } : { movies: [] }
};

const initialState: FavoritesMoviesState = getInitialState();

const favoritesMoviesSlice = createSlice({
  name: 'favoritesMovies',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<Movie>) => {
      state.movies.push(payload);
      window.localStorage.setItem('favoritesMovies', JSON.stringify(state.movies));
    },
    removeFavorite: (state, { payload }: PayloadAction<Movie>) => {
      state.movies = state.movies.filter(movie => movie.imdbID !== payload.imdbID);
      window.localStorage.setItem('favoritesMovies', JSON.stringify(state.movies));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesMoviesSlice.actions;

//Selectors
export const selectFavoriteMovies = (state: AppState) => state.favoriteMovies.movies;

export default favoritesMoviesSlice.reducer;
