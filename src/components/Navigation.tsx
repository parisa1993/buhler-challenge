import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Machine } from "../models/Machine";
import { SectionShowType } from "../models/SectionShowType";
import Section from "./Section";

export const Navigation: React.FC<{ machines: Machine[] }> = ({ machines }) => {
  return (
    <div className="navigation" data-testid="navigation">
      <ListGroup horizontal data-testid="navigation-group">
        {machines?.map((machine) => {
          return (
            <ListGroup.Item key={machine.id}>
              <Section machine={machine} type={SectionShowType.Navigation} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Navigation;
