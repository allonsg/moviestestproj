import styled from "@emotion/styled";

export const MainPageConainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px;
    max-width: 1450px;
  }
`;