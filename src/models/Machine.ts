import { RunningState } from "./RunningState";

export class Machine {
  id: number;
  name: string;
  icon: string;
  state: RunningState;

  constructor(id: number, name: string, icon: string, state: RunningState) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.state = state;
  }
}
