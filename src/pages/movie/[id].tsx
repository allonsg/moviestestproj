import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Movie } from '@/types/types';
import MainContainer from '@/components/MainContainer';
import MovieDetails from '@/components/MovieDetails';
import styled from '@emotion/styled';
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
  
const keywords: string = "Movies, Film, Search, English, Genre, Rating, Actors, Directors, Release date, Plot, User ratings, New releases";
const description = "Get all the information you need on your favorite movies. From plot summaries to cast information, our film pages have it all."
  
  return (
    <MainContainer title={`Movie | ${movie.Title}`} keywords={keywords} description={description} >
      <StyledMoviePage>
        <MovieDetails movie={movie} />
      </StyledMoviePage>
    </MainContainer>
  );
};

export default MoviePage;

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async ({ query }): Promise<GetServerSidePropsResult<MoviePageProps>> => {
  try {
    const id = query?.id;

    if (typeof id !== 'string') {
      throw new Error('No movie ID provided.');
    }

    const data = await getMovieDetails(id);

    return {
      props: {
        movie: data,
      },
    };

  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
