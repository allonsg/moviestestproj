import styled from '@emotion/styled';

export const NotFoundMessage = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #FF0000;
  text-align: center;
  animation: shake 0.5s ease-in-out;

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
