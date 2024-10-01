import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carroussel.scss';

function Carroussel({ content }) {
  const [currentImg, setcurrentImg] = useState(0);

  const pictures = content.pictures;

  const alt = content.title;

  const previous = () => {
    const firstImg = currentImg === 0;
    const newImg = firstImg ? pictures.length - 1 : currentImg - 1;
    setcurrentImg(newImg);
  };

  const next = () => {
    const lastImg = currentImg === pictures.length - 1;
    const newImg = lastImg ? 0 : currentImg + 1;
    setcurrentImg(newImg);
  };

  const showArrows = pictures.length > 1;

  return (
    <>
      <div className='carroussel'>
        {showArrows && (
          <button className='carroussel__left-arrow' onClick={previous}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        <img src={pictures[currentImg]} alt={alt} />

        {showArrows && (
          <button className='carroussel__right-arrow' onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </>
  );
}

export default Carroussel;