import styled from '@emotion/styled';

export const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;
