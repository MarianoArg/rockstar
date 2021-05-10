import { MdStar, MdStarBorder } from 'react-icons/md';

import React from 'react';

interface Props {
  index: number;
  rating: number;
  hoverRating: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (index: number) => void;
  inactive: boolean;
}

export default function Star({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
  inactive,
}: Props) {
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return true;
    } else if (!hoverRating && rating >= index) {
      return true;
    }
    return false;
  }, [rating, hoverRating, index]);

  return (
    <div
      className={`cursor-pointer ${
        hoverRating && fill ? 'text-yellow-500' : !inactive ? 'text-yellow-400' : 'text-gray-500'
      }`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      {fill || inactive ? <MdStar /> : <MdStarBorder />}
    </div>
  );
}
