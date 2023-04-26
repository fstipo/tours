import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
      }
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h3 style={{ margin: '2rem' }}>We got an error</h3>
      </main>
    );
  }

  // TODO  Button

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
