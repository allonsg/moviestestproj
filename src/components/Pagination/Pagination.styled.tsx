import styled from '@emotion/styled';

interface PageLinkProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageLink = styled.button<PageLinkProps>`
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  background-color: ${props => (props.active ? '#0070f3' : 'transparent')};
  color: ${props => (props.active ? '#fff' : '#0070f3')};
  cursor: pointer;
  margin-right: 8px;
  border-radius: 4px;
  outline: none;

  &:hover {
    background-color: ${props => (props.active ? '#0070f3' : '#eaeaea')};
  }

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
    margin-right: 16px;
  }
`;