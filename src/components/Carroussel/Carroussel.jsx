import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carroussel.css';

function Carroussel({ content }) {
  const [currentImg, setcurrentImg] = useState(0);

  const pictures = content.pictures;

  const goToPrevious = () => {
    const isFirstImage = currentImg === 0;
    const newImg = isFirstImage ? pictures.length - 1 : currentImg - 1;
    setcurrentImg(newImg);
  };

  const goToNext = () => {
    const isLastImage = currentImg === pictures.length - 1;
    const newImg = isLastImage ? 0 : currentImg + 1;
    setcurrentImg(newImg);
  };

  const showArrows = pictures.length > 1;

  return (
    <div className='carroussel'>
      {showArrows && (
        <button className='carroussel__left-arrow' onClick={goToPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      <img src={pictures[currentImg]} alt={`image-${currentImg}`} />

      {showArrows && (
        <button className='carroussel__right-arrow' onClick={goToNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
}

export default Carroussel;