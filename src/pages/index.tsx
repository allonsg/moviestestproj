import { FC } from 'react';

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
import ErrorMessage from '@/components/ErrorMessage';
import setSearchParams from '@/services/localStorage/setSearchParams';
import { MainPageConainer } from '@/components/PageContainer/indext';
import { Heading } from '@/components/StyledHeading';

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
  
  const handleSearch = async (searchQuery: string, type: string, page: number) => {
    dispatch(fetchMovies({ searchQuery, page, type }));
  };

  
  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchMovies({ searchQuery, page: pageNumber, type: currentType }));
  };

  setSearchParams({ page: currentPage || '', type: currentType, searchQuery });
  
  const movieCondition = searchedMovies?.length > 0 ? searchedMovies : movies;

  return (
    <>
      <MainContainer title='Films | Home' keywords='films' description='simple service for films'>
        <Heading fontSize="3rem" fontWeight={700}>
          Movies
        </Heading>
        <SearchBar onSearch={handleSearch} />
        <MainPageConainer>

          {searchedMovies && searchedMovies.length> 0 &&
            <>
              <MovieList movies={movieCondition} />
              <Pagination
                currentPage={currentPage}
                totalResults={resultCount}
                onPageChange={handlePageChange}
              />
            </>
          }
          {(!searchedMovies || searchedMovies.length === 0 ) && <ErrorMessage />}
        </MainPageConainer>
      </MainContainer>
    </>
  );
};

let cachedMovie: string;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  try {
    const { cookies } = context.req;
    const localQuery: string = cookies.searchQuery ?? '""';
    const localPage: string = cookies.page ?? '""';
    const localType: string = cookies.type ?? '""';

    if (localQuery !== '""' && localPage !== '""') {
    
      const searchQuery = JSON.parse(localQuery);
      const currentPage = Number(JSON.parse(localPage));
      const selectedType = localType === '""' ? '' : JSON.parse(localType);

      const { totalResults, Search: movies } = await searchMovies({ searchQuery, page: currentPage, type: selectedType });

      if (!movies) {
        store.dispatch(setResults([]));

        return {
          props: { movies: [] },
        };
      }

      store.dispatch(setResultCount(Number(totalResults)));
      store.dispatch(setSearchQuery(searchQuery));
      store.dispatch(setResults(movies));
      store.dispatch(setCurrentPage(currentPage));

      
      return {
        props: { movies },
      };
    }
  } catch (error) {
    console.error("An error occurred while fetching data from cookies:", error);
  }


  try {
    const searchQuery = cachedMovie || randomMovie();
    const { totalResults, Search: movies } = await searchMovies({ searchQuery, page: 1, type: '' });

    cachedMovie = searchQuery;
    store.dispatch(setResultCount(Number(totalResults)));
    store.dispatch(setSearchQuery(searchQuery));
    store.dispatch(setResults(movies));
    store.dispatch(setCurrentPage(1));

    return {
      props: { movies },
    };
  } catch (error) {
    console.error("An error occurred while fetching data from the API:", error);
    return {
      props: { movies: [] },
    };
  }
})



export default IndexPage;
