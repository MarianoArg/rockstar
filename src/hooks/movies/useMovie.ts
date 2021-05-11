import { Movie } from '@/types/movies';
import client from '@/lib/client';
import { useQuery } from 'react-query';

export const getMovie = async (movieId: string) => {
  const data = await client(`movie/${movieId}`);
  return data;
};

export default function useMovie(movieId: string) {
  return useQuery<Movie, Error>(['movie', movieId], () => getMovie(movieId));
}
