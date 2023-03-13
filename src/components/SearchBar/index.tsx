import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectCurrentType, setSearchQuery, setType } from '@/redux/movieSlice';
import { FC, useState } from 'react';
import { FormContainer, InputContainer, InputField, SearchButton, SelectField } from './SearchBar.styled';

interface SearchBarProps {
  onSearch: (value: string, type: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const currentType = useAppSelector<string>(selectCurrentType);
  
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    dispatch(setSearchQuery(value.trim()));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (!inputValue) return;
    dispatch(setType(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    onSearch(inputValue, currentType);
    setInputValue('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <InputField
          name="moviesInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search movies"
        />
        <SelectField value={currentType} onChange={handleTypeChange}>
          <option value="">
            Select movie type
          </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </SelectField>
      </InputContainer>
      <SearchButton type="submit">Search</SearchButton>
    </FormContainer>
  );
};

export default SearchBar;