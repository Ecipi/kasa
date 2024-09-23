import { Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Tag from '../components/Tag/Tag';
import Thumb from '../components/Thumb/Thumb';
import Dropdown from '../components/Dropdown/Dropdown';
import Logements from '../Back-end/logements.json';
import { useEffect } from 'react';
import Carroussel from '../components/Carroussel/Carroussel';

function Home() {
  useEffect(() => {
    document.title = "Accueil | Kasa";
  }, []);

  const logement = Logements[0];

  return (
    <>
      <Header />
      <Tag content={logement.tags}/>
      <Thumb content={logement}/>
      <Dropdown title="Description" content={[logement.description]} />
      <Footer />
      <Dropdown title="Équipements" content={logement.equipments} />
      <Carroussel content={logement} />
    </>
  );
}

export default Home;