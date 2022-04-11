import logo from './logo.svg';
import './App.css';

import { useState } from "react";

//  const Matchscore = () => {
//   const [inv, setInv] = useState({
//     score: 76,
//     Wicket: 2,
//     Ball: 50,
   
//   });




function App() {
  const [score,setCounter]=useState(76)
  const [wicket,settCounter]=useState(2)
  const [ball,setttCounter]=useState(50)

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
         
            {
              score
             
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
              wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
            Math.floor(ball/6)+(ball%6)/10
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"  onClick={()=>{
           if(score>100){
            
            return 
          }
         
       setCounter(score+1)
      
     }}>Add 1</button>
        <button className="addScore4"
        onClick={()=>{
          if(score>100){
            return  
          }
          setCounter(score+4)
          
        }}>Add 4</button>
        <button className="addScore6" onClick={()=>{
           if(score>100){
            
            return           }
       setCounter(score+6)
     
     }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
          if(score>100){
            
            return 
          }
       settCounter(wicket+1)
      
     }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
        if(score>100){
            
          return 
        }

       setttCounter(ball+1)
      
     }}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
      <h1 >{score>=100?"India win":"INDIA need 100 run for win click on run button"}</h1>
      }
    </div>
  
  );
}

export default App;