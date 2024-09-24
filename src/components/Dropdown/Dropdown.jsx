import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.scss';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const contentClass = isOpen ? 'display__true' : 'display__false';

  return (
    <div className="dropdown-container" onClick={toggleList}>
      <div className="dropdown-title" >
        <p>{title}</p>
        <p>
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </p>
      </div>
      <div className={contentClass}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;