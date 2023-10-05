import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let startTimer;

  useEffect(() => {
    if (isActive) {
      startTimer = setInterval(() => {
        let updatedMs = ms + 1;
        let updatedSec = sec;
        let updatedMin = min;
        let updatedHrs = hrs;

        if (updatedMs === 100) {
          updatedSec += 1;
          updatedMs = 0;
        }

        if (updatedSec === 60) {
          updatedMin += 1;
          updatedSec = 0;
        }

        if (updatedMin === 60) {
          updatedHrs += 1;
          updatedMin = 0;
        }

        setHrs(updatedHrs);
        setMin(updatedMin);
        setSec(updatedSec);
        setMs(updatedMs);
      }, 10);
    } else {
      clearInterval(startTimer);
    }

    return () => clearInterval(startTimer);
  }, [isActive, hrs, min, sec, ms]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setHrs(0);
    setMin(0);
    setSec(0);
    setMs(0);
    setIsActive(false);
  };
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <h1>stop clock in React</h1>
          <div className="display">
            <div className="hrs count">{hrs<10? hrs+"0":hrs}<span>:</span></div>
            <div className="min count">{min<10?min+"0":min}<span>:</span></div>
            
            <div className="sec count">{sec<10?"0"+sec:sec}<span>:</span></div>
            <div className="ms count">{ms<10?"0"+ms:ms}</div>
          </div>
          <div className="buttons">
            <button onClick={handleStart} className="start btn">start</button>
            <button onClick={handleStop} className="stop btn">stop</button>
            <button onClick={handleReset} className="reset btn">reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
