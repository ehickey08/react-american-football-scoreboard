//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homeScore, setHomeScore] = useState(10)
    const [awayScore, setAwayScore] = useState(10)
    const [timer, setTimer] = useState(900)

    useEffect(() => {
        let timerID = setInterval(() => {
            console.log(timer)
            setTimer(timer => {
                console.log('inside', timer)
                return timer-1
            })}, 1000)
        // return () => clearInterval(timerID)
    }, [])

    function getTime(timer){
        let minutes = Math.floor(timer / 60)
        let seconds = timer % 60
        if(minutes<10)
            minutes='0' + minutes
        if(seconds<10)
            seconds = '0' + seconds
        if(timer<0)
            return `00:00`    
        return `${minutes}:${seconds}`
    }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{getTime(timer)}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setHomeScore(homeScore+7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore+3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayScore+7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore+3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
