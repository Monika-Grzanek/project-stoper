import Time from './components/Time/Time.js';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './App.module.scss'

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if(timer) {
      interval = setInterval(() => { 
        setTime((prevValue) => prevValue + 10);
        }, 10);
    } else if(!timer){
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);


  return (
    <div className={styles.conti}>
      <Time time={time} />
      <div>
            <button className={styles.btn} onClick={() => setTimer(true)}>Start</button>
            <button className={styles.btn} onClick={() => setTimer(!true)}>Stop</button>
            <button className={styles.btn} onClick={() => setTimer(setTime(0))}>Reset</button>
      </div>
    </div>
  );
};

export default App;
