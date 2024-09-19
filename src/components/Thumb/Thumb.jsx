import './Thumb.css';
import Logements from '../../Back-end/logements.json';

function Thumb({ id }) {
  const logement = Logements[0];

  if (!logement) {
    return <div className='thumb'>Logement non trouvé</div>;
  }

  return (
    <div className='thumb'>
      <img src={logement.cover} alt={logement.title} />
    </div>
  );
}

export default Thumb;