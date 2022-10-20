import React from "react";
import { MdLockClock } from "react-icons/md";
import "./styles.css";

function TimerTab(props) {
  return (
    <div className="right-pane">
      <h1 className="heading1">
        This Timer resets for every 30 seconds and the round will be completed
      </h1>
      <div className="timer-card">
        <MdLockClock />
        <span>{props.timer}</span>
      </div>
    </div>
  );
}
export default TimerTab;
