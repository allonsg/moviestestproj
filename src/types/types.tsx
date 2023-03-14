import { ImageProps } from "next/image";
import { LinkProps } from "next/link";
export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;

  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  imdbRating?: string;
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
  type: string;
}

export type LocalInfo = {
    item: string;
    type: string | Movie[] | number;
}