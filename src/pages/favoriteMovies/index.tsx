import { FC } from 'react';
import MovieList from '@/components/MovieList';
import MainContainer from '@/components/MainContainer';
import { Movie } from '@/types/types';
import { wrapper } from '@/redux/store';
import ErrorMessage from '@/components/ErrorMessage';
import { Container } from '@/components/MovieDetails/MovieDetails.tyled';
import { Heading } from '@/components/StyledHeading';

interface Props {
  movies: Movie[];
}

const FavMovies: FC<Props> = ({ movies }) => {
const keywords: string = "Movies, Film, Search, English, Rating, Release date, New releases";
const description = "Keep track of your favorite films. Our website allows you to save and organize your top picks for easy access and future viewing."

  return (
    <>
      <MainContainer title='Movies | Favorites' keywords={keywords} description={description}>
         <Heading fontSize="3rem" fontWeight={700}>
          Favorite movies
        </Heading>
        <Container>
          {(movies && movies.length> 0) && <MovieList movies={movies} />}
          {(!movies || movies.length === 0 ) && <ErrorMessage />}
        </Container>
      </MainContainer>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  try {
    const movies: string = context.req.cookies.favoritesMovies ?? '';

    if (!movies) {
      return {
        props: {
          movies: [],
        },
      };
    }

    const res = JSON.parse(movies);

    return {
      props: {
        movies: res === '[]'? [] : res,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        movies: [],
      },
    };
  }
});


export default FavMovies;
