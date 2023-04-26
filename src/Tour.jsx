const Tour = ({ id, image, name, price, info, removeTour }) => {
  return (
    <article className="single-tour">
      <span className="tour-price">${price}</span>
      <img src={image} alt={name} className="img" title={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button
        className="btn btn-block delete-btn"
        type="button"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
export default Tour;
