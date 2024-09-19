import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dropdown.css';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-title" onClick={toggleList}>
        <p>{title}</p>
        <p>
          <FontAwesomeIcon icon={isOpen ? 'chevron-down' : 'chevron-up'} />
        </p>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;