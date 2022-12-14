import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Overview from "../components/Overview";
import { Machine } from "../models/Machine";
import { service } from "../service/production.service";

export default function Production() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    service.getData().then((data) => {
      setMachines(data);
    });
  }, []);

  return (
    <div>
      <Navigation machines={machines} />
      <Overview machines={machines} />
    </div>
  );
}
