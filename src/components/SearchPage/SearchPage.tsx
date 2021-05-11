import { useHistory, useLocation } from 'react-router-dom';

import Card from '@/components/Card';
import React from 'react';
import { useSearchMovies } from '@/hooks/movies';

export default function SearchPage() {
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search).get('query');
  const { data, isFetching } = useSearchMovies({ query: params || '' });
  const movieList = data?.results || [];

  React.useEffect(() => {
    if (!params && document) {
      history.push(document.referrer ?? '/');
    }
  }, [params, history]);

  return (
    <section className="bg-bgPurple min-h-screen w-full py-36 px-2 gap-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9">
      <div>
        {!isFetching && !movieList.length ? (
          <div className="text-6xl w-full text-center">
            <span className="text-white font-semibold text-opacity-70">No Results</span>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
            {movieList.map((item) => {
              return <Card data={item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
