import Tour from './Tour';

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <>
      <h2 className="title">Our Tours</h2>
      <p className="title-underline"></p>
      <section className="tours ">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
        <Tour />
      </section>
    </>
  );
};
export default Tours;
