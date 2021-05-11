import { Link, useLocation } from 'react-router-dom';
import { MdPageview, MdStar } from 'react-icons/md';

import { Movie } from '@/types/movies';
import Rating from './Rating';
import React from 'react';
import defaultImage from '@/img/camera-default-s.png';

interface Props {
  data?: Partial<Movie>;
}

export default function Card({ data = {} }: Props) {
  const [hoverActive, setHoverActive] = React.useState<boolean>(false);
  const baseURL = process.env.REACT_APP_IMAGE_BASE_URL;
  const date = new Date(data?.release_date ?? '');
  const location = useLocation();
  return (
    <div
      className="w-full font-sans cursor-pointer"
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)}
    >
      <Link
        to={{
          pathname: `/detail/${data.id}`,
          state: { background: location },
        }}
      >
        <div className="relative rounded-lg overflow-hidden w-full shadow-lg pb-card bg-gray-900 bg-opacity-40 hover:ring-2 ring-vibeRed transform motion-safe:hover:scale-110 box-border">
          <img
            className="absolute object-cover h-full w-full"
            src={data.poster_path ? `${baseURL}${data.poster_path}` : defaultImage}
          />
          {hoverActive && (
            <div className="absolute w-full h-full bg-black bg-opacity-80 text-white p-4">
              <div className="relative flex flex-col items-center justify-between w-full h-full">
                <div className="w-full text-center">
                  <span className="font-semibold text-base">{data.title}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-100 text-opacity-60">
                  <MdPageview />
                </div>
                <div className="text-sm flex items-center">
                  <Rating rating={data.vote_average} />
                  <span className="ml-1.5">{`${data.vote_average}/10`}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-white mt-1.5 truncate">
          <span className="font-semibold">{data.title}</span>
          <div className="flex justify-between text-sm">
            <span className="text-white text-opacity-50">{data?.release_date ? date.getFullYear() : ''}</span>
            <div className="flex items-center">
              <span className="mr-1 text-white text-opacity-50">
                <MdStar />
              </span>
              <span className="text-white text-opacity-50">{`${data.vote_average}/10`}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
