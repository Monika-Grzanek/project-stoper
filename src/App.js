import Time from './components/Time/Time.js';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
      setInterval(() => {formatTime(time)}, 1); // czy tutaj należy użyć formatTime czy innej funkcji?
      clearInterval(timer);
      return () => {
        if(timer) clearInterval(timer);
     };
    }, []);

  const start = () => {
    setTimer(setInterval(() => { 
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  /*const stop = () => {

  }*/
  


  return (
    <div>
      <Time value={time} />
      <div>
            <button action={start}>Start</button>
            <button>Stop</button>
            <button>Reset</button>
      </div>
    </div>
  );
};

export default App;
