import axios from "axios";
import { Machine } from "../models/Machine";

const getData = async () => {
  return axios
    .get<Machine[]>("data.json")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error("error");
    });
};

export const service = {
  getData,
};
