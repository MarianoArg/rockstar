import { Link } from 'react-router-dom';
import { Movie } from '@/types/movies';
import Rating from '@/components/Card/Rating';

interface Props {
  data?: Partial<Movie>;
}

export default function SlideCard({ data = {} }: Props) {
  const baseURL = process.env.REACT_APP_IMAGE_BASE_URL;

  return (
    <div>
      <Link to={`/detail/${data.id}`}>
        <div className="relative w-full pb-1/3">
          <img className="absolute object-cover h-full w-full" src={`${baseURL}${data.poster_path}`} />
          <div className="absolute flex p-8 h-full w-full bg-bgPurple bg-opacity-20">
            <div className="flex self-end flex-col drop-shadow-xl pb-8">
              <span className="text-7xl text-white font-bold drop-shadow-xl">{data.title}</span>
              <div className="text-sm flex items-center">
                <Rating rating={data.vote_average} />
                <span className="ml-1.5 text-white font-bold">{`${data.vote_average}/10`}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
