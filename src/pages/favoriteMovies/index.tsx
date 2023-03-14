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

  return (
    <>
      <MainContainer title='Films | Home' keywords='films' description='simple service for films'>
         <Heading fontSize="3rem" fontWeight={700}>
          Favorite movies
        </Heading>
        <Container>
          {movies.length > 0 ?  <MovieList movies={movies} /> : <ErrorMessage/>}
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
        movies: res,
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
