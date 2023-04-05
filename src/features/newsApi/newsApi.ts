import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../../types/types';
// I know it should be hidden in .env, but I do't care about this one
const apiKey = '75b588f7407b4970affa7b81304b037e';
interface Response {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface GetEverythingArgs {
  query: string;
  page: number;
  pageSize: number;
}

interface GetTopHeadlineArgs {
  country: string;
  query: string;
  page: number;
  pageSize: number;
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: builder => ({
    getTopHeadlines: builder.query<Response, GetTopHeadlineArgs>({
      query: ({ country, query, pageSize, page }) =>
        `top-headlines?country=${
          country ? country : encodeURIComponent('us')
        }&q=${query}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`,
    }),
    getEverything: builder.query<Response, GetEverythingArgs>({
      query: ({ query, page, pageSize }) =>
        `everything?language=en&q=${
          query ? query : encodeURIComponent("''")
        }&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useGetEverythingQuery } = newsApi;
