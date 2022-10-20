import React from "react";
import "./styles.css";

function controlTab(props) {
  return (
    <div className="left-pane">
      <h1 className="heading">Selected Controls</h1>
      <div className="item-card">
        {props.controlList.map((item) => (
          <div className="item-display">{item.value}</div>
        ))}
      </div>
    </div>
  );
}
export default controlTab;
