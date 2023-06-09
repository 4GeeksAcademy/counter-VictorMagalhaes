import React from "react";
import { useState, useEffect } from "react";


let SecondsCounter = (props) =>{

    let [currentTime, setCurrentTime] = useState(new Date());
    let [counter, setCounter] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);}
          };
    }, [isRunning])

    useEffect(() => {
        setCounter(counter-1); 
        if (counter === 990) {
            alert("Finally Counter reached 990!")
        }
    }, [currentTime])
    
    let counterTime = counter.toString().padStart(6,0);

      const stopCounter = () => {
        setIsRunning(false);
      };

      const restartCounter = () =>{
        setIsRunning(true);
      }
      const resumeCounter = () =>{
         setCounter(1000);
      }
    return (
            <div className="page">   
                <div class="blackBarr">
                    <i class="far fa-clock" style={{color: "#f4f7fa", padding:50}} /> 
                    <div class="container">      
                        {counterTime.split("").map((char, index) => (
                        <div key={index} className="greySquare">
                        {char}
                        </div>
                        ))}
                    </div>               
                </div> 
                
                <div className="buttons">
                    <button onClick={stopCounter}>Stop</button>
                    <button onClick={restartCounter}>Restart</button>
                    <button onClick={resumeCounter}>Resume</button>
                </div>
            </div>
             
              
            )
} 

export default SecondsCounter;
    
        

