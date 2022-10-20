import React, { useEffect, useState } from "react";
import DisplayPane from "../DisplayPane";
import ControlTab from "../ControlTab";
import TimerTab from "../TimerTab";
import "./styles.css";

function VideoPlayingtabs() {
  const existingControlList =
    JSON.parse(window.localStorage.getItem("controlList")) || [];
  const existingTimer =
    JSON.parse(window.localStorage.getItem("timerValue")) || 30;
  const existingRounds =
    JSON.parse(window.localStorage.getItem("rounds")) || [];

  const [controlList, setControlList] = useState(existingControlList);
  const [timer, setTimer] = useState(existingTimer);
  const [rounds, setRound] = useState(existingRounds);

  useEffect(() => {
    if (!timer) {
      updateRounds();
      setControlList([]);
      window.localStorage.removeItem("controlList");
      setTimer(30);
      return;
    }

    const intervalId = setInterval(() => {
      window.localStorage.setItem("timerValue", JSON.stringify(timer - 1));
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleClick = (e) => {
    const newelement = {
      id: Math.floor(Math.random() * 1000),
      value: e.target.value,
      timestamp: Date.now()
    };
    window.localStorage.setItem(
      "controlList",
      JSON.stringify([...controlList, newelement])
    );

    setControlList((oldlist) => [...oldlist, newelement]);
  };

  const updateRounds = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: controlList
    };
    window.localStorage.setItem("rounds", JSON.stringify([...rounds, item]));
    setRound((oldlist) => [...oldlist, item]);
  };

  return (
    <div className="main-pane">
      <ControlTab controlList={controlList} />
      <div className="mid-pane">
        <div className="top-pane">
          <h1 className="main-heading">Video Playing</h1>
          <div className="video-container">
            <video width="400" height="500" autoPlay muted loop>
              <source
                src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                type="video/mp4"
              />
            </video>
            <button onClick={handleClick} className="button-1" value="control1">
              control1
            </button>
            <button onClick={handleClick} className="button-2" value="control2">
              control2
            </button>
            <button onClick={handleClick} className="button-3" value="control3">
              control3
            </button>
            <button onClick={handleClick} className="button-4" value="control4">
              control4
            </button>
          </div>
        </div>
        <div className="bottom-pane">
          <DisplayPane rounds={rounds} />
        </div>
      </div>
      <TimerTab timer={timer} />
    </div>
  );
}

export default VideoPlayingtabs;
