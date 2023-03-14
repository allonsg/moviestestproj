import { Movie, SearchParams, SearchResult } from '@/types/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';
import { searchMovies } from '@/services/api';
import { HYDRATE } from 'next-redux-wrapper';
import setLocal from '@/services/localStorage/setLocal';

export const fetchMovies = createAsyncThunk<SearchResult, SearchParams>(
  'movies/fetchMovies',
  async (params) => {
    try {
      const result = await searchMovies({ searchQuery: params.searchQuery, page: params.page, type: params.type });
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unknown error occurred');
    }
  }
);

export interface MoviesState {
  searchQuery: string;
  results: Movie[];
  type: string,
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  resultCount: number;
  currentPage: number;
}

const initialState: MoviesState = {
  searchQuery: '',
  type: '',
  results: [],
  status: 'idle',
  error: null,
  resultCount: 0,
  currentPage: 1,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery: (state, {payload}: PayloadAction<string>) => {
      state.searchQuery = payload;
      setLocal({ item: 'searchQuery', type: payload });
    },
    setType: (state, {payload}: PayloadAction<string>) => {
      state.type = payload;
      setLocal({ item: 'type', type: payload });
    },
    setResultCount: (state, {payload}: PayloadAction<number>) => {
      state.resultCount = payload;
    },
    setCurrentPage: (state, {payload}: PayloadAction<number>) => {
      state.currentPage = payload;
      const page = payload.toString();
      setLocal({ item: 'page', type: page });
    },
    setResults: (state, {payload}: PayloadAction<Movie[]>) => {
      state.results = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.results = payload.Search;
        state.resultCount = Number(payload.totalResults);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.movies,
          status: 'idle',
          error: null
        }
      })
  }
});

export const { setSearchQuery, setResultCount, setCurrentPage, setResults, setType } = moviesSlice.actions;

//Selectors
export const selectMovies = (state: AppState) => state.movies.results;
export const selectResultCount = (state: AppState) => state.movies.resultCount;
export const selectSearchQuery = (state: AppState) => state.movies.searchQuery;
export const selectCurrentPage = (state: AppState) => state.movies.currentPage;
export const selectCurrentType = (state: AppState) => state.movies.type;

export default moviesSlice.reducer;