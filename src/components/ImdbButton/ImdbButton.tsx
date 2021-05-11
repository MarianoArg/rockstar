import ImdbLogo from '@/img/imdb-logo.png';

interface Props {
  id: string | number;
}

export default function ImdbButton({ id }: Props) {
  const baseUrl = process.env.REACT_APP_IMDB_BASE_URL;

  return (
    <a
      target="_blank"
      className="block w-12 h-8 bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${ImdbLogo})` }}
      href={`${baseUrl}${id}`}
      rel="noreferrer"
    ></a>
  );
}
