import { addFavorite, removeFavorite, selectFavoriteMovies } from '@/redux/favoriteMoviesSlice';
import { FC, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { StyledButton, EmptyHeart, FilledHeart } from './StyledFavoriteButton';
import { Movie } from '@/types/types';

interface FavoriteButtonProps {
  movie: Movie;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const favoriteMovies = useAppSelector(selectFavoriteMovies);

  const isFavorite = favoriteMovies.find((el: Movie) => el.imdbID === movie.imdbID);

  const [dataLoaded, setDataLoaded] = useState(false);

  const handleToggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  }, [dispatch, isFavorite, movie]);

  useEffect(() => {
    if (favoriteMovies) {
      setDataLoaded(true);
    }
  }, [favoriteMovies]);

  if (!dataLoaded) {
    return <EmptyHeart />;
  }

  return (
    <StyledButton onClick={handleToggleFavorite}>
      {!!isFavorite ? <FilledHeart fill="#ff0000" /> : <EmptyHeart />}
    </StyledButton>
  );
};


export default FavoriteButton;



