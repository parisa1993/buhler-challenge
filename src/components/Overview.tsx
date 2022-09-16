import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Machine } from "../models/Machine";
import { SectionShowType } from "../models/SectionShowType";
import Section from "./Section";

export const Overview: React.FC<{ machines: Machine[] }> = ({ machines }) => {
  return (
    <div className="overview">
      <ListGroup horizontal className="group">
        {machines?.map((machine) => {
          return (
            <ListGroup.Item>
              <Section machine={machine} type={SectionShowType.Overview} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Overview;
