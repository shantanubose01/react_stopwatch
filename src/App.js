
import './App.css';

import {useState,useEffect} from 'react';
export default function App() {
 
  const [isRunning, setRunning] = useState(false);
  const [timer, setTimer ] = useState(0);
  const handlePause = ()=>{
     setRunning(false);
  }
  const handleStart = ()=>{
    setRunning(true);
  }
  const handleReset = ()=>{
    setTimer(0);
    setRunning(false);
  }
  useEffect(()=>{
    let interval ;
    if(isRunning===true){
          interval = setInterval(()=>{
          
          setTimer(prev=>prev+1);
         
         },10)
        }
         
         return ()=>clearInterval(interval) ;
    
  },[isRunning])
  return (
    <div className="App">
    <p style={{fontSize : '50px'}}>  {Math.floor(timer/6000)} : {Math.floor(timer/100)%60} : {timer%100} </p>
    {isRunning ? <button onClick={handlePause}>Pause</button> :<button onClick={handleStart}>Start</button>}
    <button disabled={!isRunning && timer===0} style={{marginLeft : '20px'}} onClick ={handleReset}>Reset</button>
    </div>
  );
}
