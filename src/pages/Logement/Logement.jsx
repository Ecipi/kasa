import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import './Logement.scss';
import Logements from '../../Back-end/logements.json';
import Carroussel from '../../components/Carroussel/Carroussel';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Dropdown from '../../components/Dropdown/Dropdown';

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = Logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/error', { replace: true });
    } else {
      document.title = `${logement.title} | Kasa`;
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <>
    <div className='container'>
      <div className='logement'>
          <div className='logement__hero'>
            <Carroussel content={logement}/>
          </div>
          <div className='logement__container'>
            <div className='logement__container__left'>
              <h1>{logement.title}</h1>
              <p className='logement__container__left__p'>{logement.location}</p>
              <Tag content={logement.tags}/>
            </div>
            <div className='logement__container__right'>
              <div className='logement__container__right__host'>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt='' />
              </div>
              <div>
                <Rating content={logement.rating}/>
              </div>
            </div>
          </div>
          <div className='logement__dropdowns'>
            <div className='logement__dropdowns__description'>
              <Dropdown title='Description' content={logement.description}/>
            </div>
              <div className='logement__dropdowns__equipments'>
                <Dropdown title='Équipements' content={logement.equipments}/>
              </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Logement;
