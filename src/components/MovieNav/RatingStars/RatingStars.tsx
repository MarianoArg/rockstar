import React from 'react';
import Star from './Star';

interface Props {
  starsNumber?: number;
  name: string;
  onChange: (data: { name: string; value: number }) => void;
}

export default function RatingStars({ starsNumber = 5, onChange, name }: Props) {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const starsArray = Array.from({ length: starsNumber }, (x, i) => i + 1);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    const currentRating = rating !== index ? index : 0;
    setRating(currentRating);
    if (typeof onChange === 'function') {
      onChange({ name, value: currentRating * 2 });
    }
  };

  return (
    <div className="flex">
      <span className="text-white text-opacity-80 mr-2">Rating:</span>
      <div className="flex text-2xl">
        {starsArray.map((index) => (
          <Star
            key={index}
            index={index}
            inactive={rating === 0}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        ))}
      </div>
    </div>
  );
}
