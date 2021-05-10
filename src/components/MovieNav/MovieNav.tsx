import RatingStars from './RatingStars';
import React from 'react';
import Select from './Select';
import { useGenres } from '@/hooks/movies';

interface Props {
  onNav: (data: { name: string; value: string | number }) => void;
}

export default function MovieNav({ onNav }) {
  const { data, isFetching } = useGenres();
  const genresOptions = (data?.genres ?? []).map((genre) => ({ label: genre.name, value: genre.id }));

  const handleNav = React.useCallback(
    (data: { name: string; value: string | number }) => {
      if (typeof onNav === 'function') {
        onNav(data);
      }
    },
    [onNav],
  );

  return (
    <div className="py-6">
      <div className="flex mb-4 space-x-6">
        <Select
          label="Sort by"
          name="sort_by"
          onChange={handleNav}
          options={[
            { label: 'Popularity', value: 'popularity.desc' },
            { label: 'Release Date', value: 'release_date.desc' },
            { label: 'Rating', value: 'vote_average.desc' },
            { label: 'Title', value: 'original_title.desc' },
          ]}
        />
        <Select
          onChange={handleNav}
          label="Genres"
          name="with_genres"
          options={[{ label: 'All', value: '' }, ...genresOptions]}
        />

        <RatingStars onChange={handleNav} name="vote_average.gte" />
      </div>
      <hr className="border-white border-opacity-40	border rounded-lg" />
    </div>
  );
}
