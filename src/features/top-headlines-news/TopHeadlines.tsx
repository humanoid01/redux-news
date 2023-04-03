import { useGetTopHeadlinesQuery } from '../newsApi/newsApi';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { useDebounce, useQueryParam } from '../../app/hooks';
import { NewsList } from '../../components/NewsList/NewsList';
import { useState } from 'react';
import { getTotalPages } from '../../utils/getTotalPages';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';
import { isFetchBaseQueryError } from './../../utils/isFetchBaseQueryError';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '@mui/material/Pagination';

const options = [
  ['us', 'United States'],
  ['gb', 'United Kingdom'],
  ['ca', 'Canada'],
  ['au', 'Australia'],
  ['in', 'India'],
  ['jp', 'Japan'],
  ['cn', 'China'],
  ['fr', 'France'],
  ['de', 'Germany'],
  ['it', 'Italy'],
  ['ru', 'Russia'],
  ['za', 'South Africa'],
  ['kr', 'South Korea'],
  ['se', 'Sweden'],
  ['ch', 'Switzerland'],
  ['tw', 'Taiwan'],
  ['th', 'Thailand'],
  ['tr', 'Turkey'],
  ['ae', 'United Arab Emirates'],
  ['ve', 'Venezuela'],
];

export const TopHeadlines = () => {
  const [query, setQuery] = useQueryParam('q');
  const [country, setCountry] = useQueryParam('country');
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const debouncedSearchTerm = useDebounce(query, 1000);
  const { data, error, isLoading } = useGetTopHeadlinesQuery({
    query: debouncedSearchTerm,
    country: country,
    page,
    pageSize,
  });

  if (isLoading) return <LinearProgress />;
  if (isFetchBaseQueryError(error)) {
    return (
      <>
        <SearchInput value={query} onChange={setQuery} />
        <DropdownSelect
          options={options}
          value={country}
          onChange={setCountry}
          baseValue='us'
        />
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
      <DropdownSelect
        options={options}
        value={country}
        onChange={setCountry}
        baseValue={''}
      />
      <NewsList articles={data.articles} />
      <Pagination
        count={getTotalPages(data.totalResults, pageSize)}
        variant='outlined'
        onChange={(e, value) => setPage(value)}
      />
    </>
  );
};
