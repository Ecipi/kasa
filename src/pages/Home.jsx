import { Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Tag from '../components/Tag/Tag';
import Thumb from '../components/Thumb/Thumb';
import Dropdown from '../components/Dropdown/Dropdown';
import Logements from '../Back-end/logements.json';

function Home() {

  const logement = Logements[0];

  return (
    <>
      <Header />
      <Tag />
      <Thumb />
      <Footer />
      <Dropdown title="Description" content={[logement.description]} />
      <Dropdown title="Équipements" content={logement.equipments} />
    </>
  );
}

export default Home;