import ImdbButton from '@/components/ImdbButton';
import { MdClose } from 'react-icons/md';
import Rating from '@/components/Card/Rating';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMovie } from '@/hooks/movies';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();
  const history = useHistory();
  const { data } = useMovie(id);
  const baseURL = process.env.REACT_APP_IMAGE_BASE_URL;
  const date = new Date(data?.release_date ?? '');

  const useLenght = React.useMemo(() => {
    const length = data?.runtime ?? 0;
    const hours = Math.floor(length / 60);
    const mins = length % 60;
    return {
      hours,
      mins,
    };
  }, [data?.runtime]);
  const genreList = (data?.genres ?? []).map((gen) => gen.name);

  const handleClose = () => {
    history.goBack();
  };

  React.useEffect(() => {
    if (document) {
      const body = document.querySelector('body');
      body?.style.setProperty('overflow', 'hidden');
      return () => {
        body?.style.removeProperty('overflow');
      };
    }
  }, []);

  return (
    <section className="w-full h-full fixed inset-0 bg-bgPurple bg-opacity-80 z-50 overflow-y-auto">
      <div className="pt-20 flex flex-col p-4">
        <button className="text-white text-6xl font-semibold self-end focus:outline-none" onClick={handleClose}>
          <MdClose />
        </button>
        <div className="flex p-4 flex-wrap rounded-lg bg-bgPurple bg-opacity-90 lg:p-8">
          <div className="w-full rounded-lg overflow-hidden lg:w-1/3">
            <img className="w-full" src={`${baseURL}${data?.poster_path}`} />
          </div>
          <div className="flex flex-col w-full mt-8 text-white pl-8 lg:w-2/3 lg:mt-0">
            <div>
              <h1 className="text-6xl font-semibold">{data?.title}</h1>
              <div className="flex font-semibold divide-x divide-gray-100 divide-opacity-80 my-4 items-center">
                <span className="px-2">{data?.release_date ? date.getFullYear() : ''}</span>
                <span className="px-2">{`${useLenght.hours}h ${useLenght.mins}min`}</span>
                <span className="px-2">{genreList.join(', ')}</span>
                <div className="px-2">
                  <ImdbButton id={data?.imdb_id ?? ''} />
                </div>
                <div className="px-2">
                  <Rating rating={data?.vote_average} />
                </div>
              </div>
            </div>
            <div className="text-lg px-2 my-6">
              <p>{data?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
