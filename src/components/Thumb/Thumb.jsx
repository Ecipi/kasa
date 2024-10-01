import './Thumb.scss';

function Thumb({ content }) {

  return (
      <div className='thumb'>
        <img src={content.cover} alt={content.title} />
        <h2>{content.title}</h2>
      </div>
  );
}

export default Thumb;