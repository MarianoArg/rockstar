import { useDiscoverMovies, useTrending } from '@/hooks/movies';

import { AiFillFire } from 'react-icons/ai';
import Card from '@/components/Card';
import MovieNav from '@/components/MovieNav';
import React from 'react';
import SlideCard from '@/components/SlideCard';
import Slider from 'react-slick';

export default function Homepage() {
  const [params, setParams] = React.useState<Record<string, unknown>>({ sort_by: 'popularity.desc' });
  const { data } = useDiscoverMovies({
    ...params,
    include_video: 'true',
  });
  const { data: trendingData } = useTrending('movie', 'week');
  const movieList = data?.results || [];
  const trendingList = (trendingData?.results || []).filter((item) => item.poster_path);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    customPaging: function Dot() {
      return (
        <a className="h-1 block">
          <span className="h-full bg-opacity-80 bg-gray-600 block rounded-lg"></span>
        </a>
      );
    },
  };

  const handleNavigation = React.useCallback((data) => {
    setParams((p) => ({ ...p, [data.name]: data.value }));
  }, []);

  return (
    <section className="bg-bgPurple min-h-screen w-full">
      <div className="relative">
        <Slider {...settings}>
          {trendingList.slice(0, 5).map((item) => (
            <SlideCard data={item} key={item.id} />
          ))}
        </Slider>
        <div className="absolute top-20 p-8 flex items-center">
          <h2 className="text-white font-semibold text-4xl drop-shadow-xl underline">This week</h2>
          <span className="text-vibeRed drop-shadow-xl text-4xl ml-2">
            <AiFillFire />
          </span>
        </div>
      </div>
      <div className="mt-14 pb-36 px-2 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9">
        <MovieNav onNav={handleNavigation} />
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
          {movieList.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
