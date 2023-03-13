import { ImageProps } from "next/image";
import { LinkProps } from "next/link";

export interface Movie {
  Title: string;
  Year: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster: string;
  Ratings?: {
    Source: string;
    Value: string;
  }[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface IImage extends ImageProps{}

export interface Rating {
  source: string;
  value: string;
}

export interface SearchResult {
  Search: Movie[];
  totalResults: string;
  Response: string;
}


export interface ILink extends LinkProps{}

export interface Pagination {
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  totalPages: number;
}

export interface SearchParams {
  searchQuery: string;
  page: number;
  type?: string;
}

export type LocalInfo = {
    item: string;
    type: string;
}

// 
export interface FavoritesMoviesState {
  ids: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
