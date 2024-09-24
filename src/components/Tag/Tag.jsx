import './Tag.scss';

function Tag ({ content }) { 
    return (
        <div className='tags-container'>
          {content.map((tag, i) => (
            <div key={i} className='tag'>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      );
  }

export default Tag;

