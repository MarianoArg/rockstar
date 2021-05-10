// import { Manifest, Pagination } from '@/types/manifests';

import client from '@/lib/client';
import { useQuery } from 'react-query';

export const getMovie = async (movieId: string) => {
  const { data } = await client(`movie/${movieId}`);
  return data;
};

// type Response = {
//   data: Manifest[];
//   pagination: Pagination;
// };

export default function useMovie(movieId: string) {
  return useQuery<Response, Error>(['movie', movieId], () => getMovie(movieId));
}
