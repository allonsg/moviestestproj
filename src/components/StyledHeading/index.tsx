import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface HeadingProps {
  fontSize?: string;
  fontWeight?: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Heading = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || '1.5rem'};
  font-weight: ${props => props.fontWeight || 400};
  margin: 0;
  padding: 0;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (min-width: 768px) {
    font-size: ${props => props.fontSize || '2rem'};
  }
`;