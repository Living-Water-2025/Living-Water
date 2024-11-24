import { useEffect, useMemo, useState } from "react";
import { BaptismAPI } from "../API/BaptismAPI";
import { Baptism } from "../API/Models/Baptism";

export const useBaptisms = () => {
  const baptismAPI = useMemo(() => new BaptismAPI(), []);
  const [baptisms, setBaptisms] = useState<Baptism[]>([]);

  useEffect(() => {
    baptismAPI.getBaptisms().then(setBaptisms); //Prefetch

    const interval = setInterval(() => {
      baptismAPI.getBaptisms().then(setBaptisms); // Polling
    }, 1000);

    return () => clearInterval(interval);
  }, [baptismAPI]);

  return baptisms ?? [];
};
