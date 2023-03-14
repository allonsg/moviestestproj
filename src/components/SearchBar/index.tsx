import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectCurrentType, setSearchQuery, setType } from '@/redux/movieSlice';
import { FC, useState } from 'react';
import { FormContainer, InputContainer, InputField, SearchButton, SelectField } from './SearchBar.styled';
import { toast } from 'react-toastify';

interface SearchBarProps {
  onSearch: (value: string, type: string, page: number) => void;
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
    if (!inputValue) {
      toast.warn('You have to set what movie you want to search before select type', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } 
    dispatch(setType(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    onSearch(inputValue, currentType, 1);
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
          <option value="type" disabled={true}>Type</option>
          <option value="">Any type of movie</option>
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
