import { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Container, PageLink } from './Pagination.styled';

interface Props {
  currentPage: number;
  totalResults: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalResults, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const totalPages = Math.ceil(totalResults / 10);
  const maxVisiblePages = 10;

  useEffect(() => {
    const getVisiblePages = () => {
      const pageDiff = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - pageDiff);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    setVisiblePages(getVisiblePages());
  }, [currentPage, totalPages]);

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const handleFirstPageClick = () => {
    handlePageClick(1);
  };

  const handleLastPageClick = () => {
    handlePageClick(totalPages);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Container>
      <PageLink onClick={handleFirstPageClick} disabled={isFirstPage}>{'<<'}</PageLink>
      <PageLink onClick={() => handlePageClick(currentPage - 1)} disabled={isFirstPage}>{'<'}</PageLink>
      {visiblePages.map((pageNumber) => (
        <PageLink
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </PageLink>
      ))}
      <PageLink onClick={() => handlePageClick(currentPage + 1)} disabled={isLastPage}>{'>'}</PageLink>
      <PageLink onClick={handleLastPageClick} disabled={isLastPage}>{'>>'}</PageLink>
    </Container>
  );
};


export default Pagination
