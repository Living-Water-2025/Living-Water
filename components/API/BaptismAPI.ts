import { Baptism } from "./Models/Baptism";

export class BaptismAPI {
  public getClusteredBaptisms = async () => {
    //TODO: implement this, should be very similar to getBaptisms
  };

  public getBaptisms = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL + "/GetAllBaptisms"
      );

      const data: Baptism[] = await response.json();

      return data ?? [];
    } catch (error) {
      console.error("Error fetching baptism locations:", error);
      return [];
    }
  };

  public addBaptism = async (baptism: Baptism) => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + "/AddBaptism", {
      method: "POST",
      body: JSON.stringify(baptism),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to add baptism");
    }

    const data: Baptism = await response.json();
    return data;
  };

  public deleteBaptism = async (id: string, password: string ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/DeleteBaptism?id=${id}&password=${password}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete baptism");
    }
  };
}