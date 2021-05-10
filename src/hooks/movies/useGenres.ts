import { Genre } from '@/types/movies';
import client from '@/lib/client';
import { useQuery } from 'react-query';

export const getGenresList = async () => {
  const data = await client('genre/movie/list');
  return data;
};

type Response = {
  genres: Genre[];
};

export default function useDiscoverMovies() {
  return useQuery<Response, Error>(['genres'], () => getGenresList());
}
