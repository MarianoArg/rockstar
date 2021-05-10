import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';

export default function Rating({ rating }) {
  const starsArray = Array.from({ length: 5 }, (x, i) => i + 1);
  const average = rating ? Math.ceil(rating / 2 / 0.5) * 0.5 : 0;

  return (
    <div className="flex text-xl text-yellow-400 drop-shadow-xl">
      {starsArray.map((s) => {
        if (s <= average) {
          return <MdStar key={s} />;
        } else if (average % 1 !== 0 && s - 1 < average && s > average) {
          return <MdStarHalf key={s} />;
        }
        return <MdStarBorder key={s} />;
      })}
    </div>
  );
}
