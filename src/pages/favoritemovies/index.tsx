import { FC } from 'react';

import styled from '@emotion/styled';

import { fetchMovies, selectCurrentPage, selectCurrentType, selectMovies, selectResultCount, selectSearchQuery, setCurrentPage, setResultCount, setResults, setSearchQuery } from '@/redux/movieSlice';

import MovieList from '@/components/MovieList';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import MainContainer from '@/components/MainContainer';
import { Movie } from '@/types/types';
import { searchMovies } from '@/services/api';
import { randomMovie } from '@/services/randomMovie';
import { wrapper } from '@/redux/store';

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px;
    max-width: 1450px;
  }
`;

interface Props {
  movies: Movie[];
}

const IndexPage: FC<Props> = ({ movies }) => {
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector<string>(selectSearchQuery);
  const searchedMovies = useAppSelector<Movie[]>(selectMovies);
  const resultCount = useAppSelector<number>(selectResultCount);
  const currentPage = useAppSelector<number>(selectCurrentPage);
  const currentType = useAppSelector<string>(selectCurrentType);
  
  const handleSearch = async (value: string, type?: string) => {
     
      dispatch(fetchMovies({searchQuery: value, page: currentPage, type}));
   };
  
  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchMovies({ searchQuery, page: pageNumber, type: currentType }));
  };
  
  const movieCondition = searchedMovies.length > 0 ? searchedMovies : movies;

  return (
    <>
      <MainContainer title='Films | Home' keywords='films' description='simple service for films'>
        <Container>

        <SearchBar onSearch={handleSearch} />
          <MovieList movies={movieCondition} />
          <Pagination
            currentPage={currentPage}
            totalResults={resultCount}
            onPageChange={handlePageChange}
          />
        </Container>
      </MainContainer>
    </>
  );
};

let cachedMovie: string;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const someMovie = cachedMovie || randomMovie();
  // const state = store.getState();

  const {totalResults,Search} = await searchMovies({ searchQuery: someMovie, page: 1 });
  
  cachedMovie = someMovie;
  store.dispatch(setResultCount(Number(totalResults)));
  store.dispatch(setSearchQuery(someMovie));
  store.dispatch(setResults(Search));

  return {
    props: {
      movies: Search,
    },
  };
});

export default IndexPage;
