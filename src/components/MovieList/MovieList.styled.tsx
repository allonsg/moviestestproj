import styled from '@emotion/styled';

export const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

    @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
