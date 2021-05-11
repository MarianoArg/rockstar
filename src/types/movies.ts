export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string | Date;
  homepage: string;
  title: string;
  video: boolean;
  imdb_id: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  production_companies: Company[];
  production_countries: Country[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  spoken_languages: Language[];
};

export type Country = {
  iso_3166_1: string;
  name: string;
};

export type Company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};
