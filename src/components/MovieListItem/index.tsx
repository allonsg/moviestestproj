import FavoriteButton from '../FavoriteButton';
import { Movie } from '@/types/types';
import { StyledMovieInfo, StyledMovieListItem, StyledMoviePoster, StyledMovieTitle } from './MovieListItem.styled';
import { FC } from 'react';
import Link from 'next/link';

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: FC<MovieListItemProps> = ({ movie }) => {
    return (
        <StyledMovieListItem>
            <Link href={`/movie/${movie.imdbID}`}>
                <StyledMoviePoster
                    src={movie.Poster === 'N/A' ? '/noImagePlaceholder.png' : movie.Poster}
                    alt={`Poster for ${movie.Title}`}
                    width={700}
                    height={475}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </Link>
            <StyledMovieInfo className="movie-info">
                <div>
                <StyledMovieTitle>{movie.Title}</StyledMovieTitle>
                <StyledMovieTitle>{movie.Year}</StyledMovieTitle>
                </div>
                <FavoriteButton movie={movie} />
            </StyledMovieInfo>
        </StyledMovieListItem>
    );
};

export default MovieListItem;
