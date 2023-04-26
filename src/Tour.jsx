const Tour = ({ id, image, name, price, info, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" title={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
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
