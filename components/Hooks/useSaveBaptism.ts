import { BaptismAPI } from "../API/BaptismAPI";

export const useSaveBaptism = () => {
  return new BaptismAPI().addBaptism;
};
