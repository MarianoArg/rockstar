import { Movie } from '@/types/movies';
import client from '@/lib/client';
import { useQuery } from 'react-query';

type TimeWindow = 'day' | 'week';
type Mediatype = 'all' | 'movie' | 'tv' | 'person';

export const trendingMedia = async (mediaType: Mediatype, timeWindow: TimeWindow) => {
  const data = await client(`trending/${mediaType}/${timeWindow}`);
  return data;
};

type Response = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};

export default function useTrending(mediaType: Mediatype, timeWindow: TimeWindow) {
  return useQuery<Response, Error>(['trending', mediaType, timeWindow], () => trendingMedia(mediaType, timeWindow));
}
