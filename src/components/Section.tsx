import React from "react";
import { Machine } from "../models/Machine";
import { RunningState } from "../models/RunningState";
import { SectionShowType } from "../models/SectionShowType";
import StateIcon from "./StateIcon";

export const Section: React.FC<{ machine: Machine; type: SectionShowType }> = ({
  machine,
  type,
}) => {
  return (
    <div className={`section ${RunningState[machine.state].toLowerCase()}`}>
      <StateIcon state={machine.state} />
      {type === SectionShowType.Overview ? (
        <div className="section-icon">
          <span className="material-icons">{machine.icon}</span>
        </div>
      ) : (
        ""
      )}
      <div className="name">{machine.name}</div>
    </div>
  );
};

export default Section;
