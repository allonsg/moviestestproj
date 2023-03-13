import { configureStore,combineReducers, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import {createWrapper, MakeStore} from 'next-redux-wrapper';
import favoriteMoviesReducer from './favoriteMoviesSlice';
import moviesReducer from './movieSlice';

const reducers = {
    favoriteMovies: favoriteMoviesReducer,
    movies: moviesReducer,
  };
  
const reducer = combineReducers(reducers);
  
const makeStore: MakeStore<any> = (ctx) =>
  configureStore({
    reducer,
    devTools: true,
  });

          
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<Store<AppStore>>(makeStore, { debug: true });
