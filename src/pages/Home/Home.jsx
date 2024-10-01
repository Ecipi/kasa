import { useEffect } from 'react';
import heroIMG from '../../assets/img/hero.jpg';
import Logements from '../../Back-end/logements.json'; 
import Thumb from '../../components/Thumb/Thumb';
import './Home.scss';
import { NavLink } from 'react-router-dom';

function Home() {

  useEffect(() => {
    document.title = "Accueil | Kasa";
  },);

  return (
    <>
    <div className='container'>
      <div className='main'>
          <div className='main__hero'>
            <img src={heroIMG} alt="" />
            <h2>Chez vous, partout et ailleurs</h2>
          </div>

          <div className="main__thumb">
            <div className='main__thumb__container'>
              {Logements.map((logement) => (
                <NavLink to={`/logement/${logement.id}`} key={logement.id}><Thumb content={logement} /></NavLink>
              ))}
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Home;