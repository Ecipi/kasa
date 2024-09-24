import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.scss';
import { useEffect } from 'react';

function Error() {

  useEffect(() => {
    document.title = "Erreur | Kasa";
  },);

  return (
    <><div className='error'>
        <div className='error__text'>
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas.</p>
        </div>
        <div className='error__link'>
          <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    </div>
    </>
  );
};

export default Error;