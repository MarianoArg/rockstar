import { Movie } from '@/types/movies';
import client from '@/lib/client';
import { useQuery } from 'react-query';

export const discoverMovies = async (query: string) => {
  const data = await client(`discover/movie?${query}`);
  return data;
};

type Response = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};

export default function useDiscoverMovies(queryObject: Record<string, string>) {
  const query = new URLSearchParams(queryObject).toString();
  return useQuery<Response, Error>(['discoverMovies', query], () => discoverMovies(query));
}
