import { useState } from 'react';
import { useDebounce, useQueryParam } from '../../app/hooks';
import { useGetEverythingQuery } from '../newsApi/newsApi';
import { getTotalPages } from '../../utils/getTotalPages';
import { isFetchBaseQueryError } from './../../utils/isFetchBaseQueryError';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { NewsList } from '../../components/NewsList/NewsList';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '@mui/material/Pagination';

export const EverythingNews = () => {
  const [query, setQuery] = useQueryParam('q');
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const debouncedSearchTerm = useDebounce(query, 1000);
  const { data, error, isLoading } = useGetEverythingQuery({
    query: debouncedSearchTerm,
    page: page,
    pageSize: pageSize,
  });

  if (isLoading) return <LinearProgress />;

  if (isFetchBaseQueryError(error)) {
    return (
      <>
        <SearchInput value={query} onChange={setQuery} />
        <Typography>{error.data.message}</Typography>
      </>
    );
  }

  if (!data?.articles.length)
    return (
      <>
        <SearchInput value={query} onChange={setQuery} />
        <Typography>No data for current search.</Typography>
      </>
    );

  return (
    <>
      <SearchInput value={query} onChange={setQuery} />
      <NewsList articles={data.articles} />
      <Pagination
        count={getTotalPages(data.totalResults, pageSize)}
        variant='outlined'
        onChange={(e, value) => setPage(value)}
      />
    </>
  );
};
