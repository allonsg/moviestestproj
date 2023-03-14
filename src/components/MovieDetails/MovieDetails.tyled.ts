import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { ILink } from '@/types/types';

export const BackLink = styled(Link)<ILink>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #222;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`;

export const Poster = styled(Image)`
  margin-bottom: 2rem;
`;


export const InfoTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-bottom: 2rem;
  width: 100%;

  th,
  td {
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #222;
    color: #fff;
    font-weight: bold;
  }

  tr:nth-of-type(even) {
    background-color: #f0f0f0;
  }

  tr:nth-of-type(odd) {
    background-color: #ddd;
  }
`;
