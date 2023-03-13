import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import Link from 'next/link';
import { Movie } from '@/types/types';
import MainContainer from '@/components/MainContainer';
import MovieDetails from '@/components/MovieDetails';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { getMovieDetails } from '@/services/api';

interface MoviePageProps {
movie: Movie;
}

export const StyledMoviePage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem;
`;

const MoviePage = ({ movie }: MoviePageProps) => {
  //! ДОБАВИТЬ ВО ВСЕ КОМПОНЕНТЫ => (return <div>Loading...</div>; )
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer title={`Movie | ${movie.Title}`} keywords="films" description="simple service for films" >
      <StyledMoviePage>
        <MovieDetails movie={movie} />
      </StyledMoviePage>
    </MainContainer>
  );
};

export default MoviePage

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async ({query}): Promise<GetServerSidePropsResult<MoviePageProps>> => {
  const { id } = query!;

  try {
    if (typeof id !== 'string') {
      throw new Error('No movie ID provided.');
    }

    const data = await getMovieDetails(id);

    return {
      props: {
        movie: data,
      },
    };

  } catch (error: unknown) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};


