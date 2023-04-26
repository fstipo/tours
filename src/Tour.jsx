const Tour = (tours) => {
  console.log(tours);
  const { image, name, price, info } = tours;
  return (
    <div className="single-tour">
      <span className="tour-price">{price}</span>
      <img src={image} alt={name} className="img" title={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="btn btn-block info-btn delete-btn" type="button">
          not interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
