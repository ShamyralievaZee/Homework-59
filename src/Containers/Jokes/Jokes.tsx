import { useEffect, useState } from 'react';

const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke, setJoke] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      const data = await response.json();
      setJoke(data.value);
      console.log(response)
    };

    void fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className='joke-container'>{joke}</div>
    </div>
  );
};

export default Jokes;
