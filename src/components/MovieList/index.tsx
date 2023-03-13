import { Movie } from '@/types/types';
import { FC } from 'react';
import MovieListItem from '../MovieListItem';
import { StyledMovieList } from './MovieList.styled';

interface MovieListProps {
  movies: Movie[];
  favoriteIds?: string[];
  handleToggleFavorite?: (movieId: string) => void;
}

const MovieList:FC<MovieListProps> = ({ movies, favoriteIds, handleToggleFavorite }) => {
 
  return (
    <StyledMovieList>
          {!!movies && movies.map((movie) => (<MovieListItem key={movie.imdbID} movie={movie} />))}
    </StyledMovieList>
  );
};

export default MovieList;
