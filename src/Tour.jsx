import { useState } from 'react';

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" title={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          <span>{!readMore ? `${info.substring(0, 200)}...` : info}</span>
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          type="button"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
