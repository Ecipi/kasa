import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss';

function Rating({ content }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: content }, (star, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="rating__filled" />
      ))}
      {Array.from({ length: totalStars - content }, (star, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="rating__empty" />
      ))}
    </div>
  );
}

export default Rating;