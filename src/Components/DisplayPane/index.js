import React from "react";
import "./styles.css";

function DisplayPane(props) {
  const roundsReversed = [...props.rounds].reverse();
  return (
    <div className="display-rounds-card">
      {roundsReversed.map((item, index) => (
        <div className="rounds-card">
          <p className="sub-heading">Round {props.rounds.length - index}</p>
          {item.value.length === 0 && <p>No Controls Selected in this round</p>}
          {item.value.map((obj) => {
            return (
              <div className="control-items">
                {obj.value} is clicked at
                {new Intl.DateTimeFormat("en-us", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                }).format(obj.timestamp)}
                (timestamp)
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
export default DisplayPane;
