import axios from 'axios';
import {useEffect, useState} from 'react';

const SideEffect = () => {
  const [count, setCount] = useState(0); // 1
  const [searchTerm, setSearchTerm] = useState('');

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   axios.post('/appointments/5', { appointment: {} })
  //     .then();
  // };

  // useEffect(() => {}, []);

  useEffect(() => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  }, []);
  
  useEffect(() => {
    if (count < 7) {
      console.log('updating the title');
      document.title = `the count is ${count}`;
    }
  }, [count]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  }, [count]);

  return (
    <div>
      <h2>Side Effect Component</h2>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </div>

      <div>
        <label>Search Term</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SideEffect;
