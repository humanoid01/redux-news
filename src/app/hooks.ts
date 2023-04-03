import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useQueryParam = (param: string) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const query = queryParams.get(param) ?? '';

  const setQuery = (newQuery: string) =>
    setQueryParams(
      (prev: URLSearchParams) => {
        const params = new URLSearchParams(prev);
        if (!newQuery) {
          params.delete(param);
          return params;
        }
        params.set(param, newQuery);
        return params;
      },
      { replace: true }
    );

  return [query, setQuery] as const;
};
