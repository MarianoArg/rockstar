import { Movie } from '@/types/movies';
import client from '@/lib/client';
import { useQuery } from 'react-query';

export const searchMovies = async (query: string) => {
  const data = await client(`search/movie?${query}`);
  return data;
};

type Response = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};

export default function useSearchMovies(queryObject: Record<string, string>) {
  const query = new URLSearchParams(queryObject).toString();
  return useQuery<Response, Error>(['searchMovies', query], () => searchMovies(query));
}
