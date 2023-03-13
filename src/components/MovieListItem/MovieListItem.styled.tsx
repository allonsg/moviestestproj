import styled from '@emotion/styled';
import Image from 'next/image';
import { IImage } from '@/types/types';

export const StyledMovieListItem = styled.li`
  width: 100%;
  margin-bottom: 2rem;
  padding: 0;
  background-color: black;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    max-width: calc(33.33% - 1rem);
  }

  &:hover {
    .movie-info {
      opacity: 1;
    }
  }
`;

export const StyledMoviePoster = styled(Image)<IImage>`
  display: block;
  margin: 0;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  maxWidth: '100%',
  height: 'auto',
`;

export const StyledMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledMovieTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    text-align: left;
    margin:0;
  }
`;
