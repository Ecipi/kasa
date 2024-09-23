import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const contentClass = isOpen
    ? 'display__true'
    : 'display__false';

  return (
    <div className="dropdown-container">
      <div className="dropdown-title" onClick={toggleList}>
        <p>{title}</p>
        <p>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </p>
      </div>
      <div className={contentClass}>
        {content.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;