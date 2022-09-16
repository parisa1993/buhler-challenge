import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Machine } from "../models/Machine";
import { SectionShowType } from "../models/SectionShowType";
import Section from "./Section";

export const Overview: React.FC<{ machines: Machine[] }> = ({ machines }) => {
  return (
    <div className="overview">
      <div className="group">
        {machines?.map((machine) => {
          return (
            <div className="item">
              <Section machine={machine} type={SectionShowType.Overview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
