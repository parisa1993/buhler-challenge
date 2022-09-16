import React from "react";
import { RunningState } from "../models/RunningState";

export const StateIcon: React.FC<{ state: RunningState }> = ({ state }) => {
  const getIcon = (): string => {
    switch (state) {
      case RunningState.Alarm:
        return "error_outline";
      case RunningState.Warning:
        return "warning_amber";
      case RunningState.Running:
        return "settings_backup_restore";
      default:
        return "";
    }
  };
  return <span className="material-icons state-icon">{getIcon()}</span>;
};

export default StateIcon;
