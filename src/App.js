import React from 'react';
import './App.css';
import fun from './droplets.gif'
import CountDownTimer from './CountDownTimer';

function App() {

/*  
        let arrival_date = new Date('08/16/2023');
*/
const arrival = new Date("2023-08-16").getTime();
    
  return (
    <div className="App">
      <body className="container">
    
        <h1 className="title">Days Until Emily Cums:</h1>
        <CountDownTimer targetDate={arrival} />
      


        <div style = {{display:'flex'}}>
        <img src={fun} alt="fun..." style = {{height: '250px', padding:'20px'}}/>
        <img src={fun} alt="fun..." style = {{height: '250px', padding:'20px'}}/>
        <img src={fun} alt="fun..." style = {{height: '250px', padding:'20px'}}/>
        <img src={fun} alt="fun..." style = {{height: '250px', padding:'20px'}}/>

        </div>
                 
      </body>
    </div>
  );
}

export default App;
