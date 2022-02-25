import React, { useState } from 'react';
import './App.css';
import SetCall from './Components/SetCall';
import Status from './Components/Status';
import OnProgress from './Components/OnProgress';
import OnWaiting from './Components/OnWaiting';
import Outputs from './Components/Output';

function App() {

  var [[t1, t2, t3, t4, t5, t6, t7, t8], setStatus] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [from, setCallFrom] = useState("");
  const [to, setCallTo] = useState("");
  const [duration, setDuration] = useState(0);
  const [ctime, setCTime] = useState(0);
  
  return (
    <div className="container">
      <SetCall
        setCallFrom={setCallFrom}
        setCallTo={setCallTo}
        setDuration={setDuration}
        setCTime={setCTime}
        from={from}
        to={to}
        duration={duration}
        ctime={ctime}
      />
      <br />
      <div className='sub-container'>
        <Status
          setStatus={setStatus}
          t1={t1}
          t2={t2}
          t3={t3}
          t4={t4}
          t5={t5}
          t6={t6}
          t7={t7}
          t8={t8}
          duration={duration}
        />
        <OnProgress />
        <OnWaiting />
        <Outputs />
      </div>
    </div>
  );
}

export default App;
