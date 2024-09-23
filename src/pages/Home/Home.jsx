import { useEffect, useState } from 'react';
import heroIMG from '../../assets/img/hero.jpg';
import Logements from '../../Back-end/logements.json'; 
import Thumb from '../../components/Thumb/Thumb';
import './Home.css';

function Home() {
  const [logementsData, setLogementsData] = useState([]);

  useEffect(() => {
    document.title = "Accueil | Kasa";
    const six = Logements.slice(0, 6);
    setLogementsData(six);
  }, []);

  return (
    <><div className='main'>
        <div className='main__hero'>
          <img src={heroIMG} alt="" />
          <div className="main__hero__overlay"></div>
          <h2>Chez vous, partout et ailleurs</h2>
        </div>

        <div className="main__thumb">
          <div className='main__thumb__container'>
            {logementsData.map((logement) => (
              <Thumb key={logement.id} content={logement} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;