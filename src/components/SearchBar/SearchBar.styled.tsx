import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  gap: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;

  &::placeholder {
    color: #999;
  }
`;

export const SelectField = styled.select`
  border: none;
  outline: none;
  background-color: #f9f9f9;
  padding: 10px;
  font-size: 16px;
  color: #333;
`;

export const SearchButton = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 0px;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2c3e50;
  }

  &:active {
    transform: scale(0.95);
  }
`;