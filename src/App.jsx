import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
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
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h3 style={{ margin: '2rem' }}>We got an error</h3>;
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};
export default App;
