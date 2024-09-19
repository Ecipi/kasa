import './Tag.css';
import Logements from '../../Back-end/logements.json';

function Tag ({ id }) {
    const logement = Logements[0];
  
    if (!logement) {
      return <div className='tag'>Logement non trouvé</div>;
    }
  
    return (
        <div className='tags-container'>
          {logement.tags.map((tag, i) => (
            <div key={logement.id} className='tag'>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      );
  }

export default Tag;

