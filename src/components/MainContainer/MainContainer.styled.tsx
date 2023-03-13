
import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(Link)<LinkProps>`
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;