import styled from '@emotion/styled';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3182ce;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const EmptyHeart = styled(AiOutlineHeart)`
width: 40px;
height: 40px;
`;

export const FilledHeart = styled(AiFillHeart)`
width: 40px;
height: 40px;
`;