
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
  justify-content: flex-start;
 }
`;

export const StyledNav = styled.nav`
display: flex;
  align-items: center;
justify-content: center;

 @media (min-width: 768px) {
  justify-content: space-between;
 }
`

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;