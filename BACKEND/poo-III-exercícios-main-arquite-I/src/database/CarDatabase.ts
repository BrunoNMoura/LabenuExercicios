import { CarDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CarDatabase extends BaseDatabase {
  TABLE_NAME = "cars";

  public async findCars(model: string | undefined): Promise<CarDB[]> {
    let carsDB;

    if (model) {
      const result: CarDB[] = await BaseDatabase.connection(
        this.TABLE_NAME
      ).where("model", "LIKE", `%${model}%`);

      carsDB = result;
    } else {
      const result: CarDB[] = await super.findAll();
      carsDB = result;
    }
    return carsDB;
  }
  public async findCarById(id: string): Promise<CarDB | undefined> {
    const [carDB]: CarDB[] | undefined[] = await super.findById(id);
    return carDB;
  }
  public async createdCar(newCarDB: CarDB): Promise<void> {
    await BaseDatabase.connection(this.TABLE_NAME).insert(newCarDB);
  }
  public async updateCarById(putCarDB: CarDB): Promise<void> {    
    await BaseDatabase.connection(this.TABLE_NAME)
      .update(putCarDB)
      .where({ id: putCarDB.id });
  }
  public async deleteCarById(id: string): Promise<void> {
    await super.deleteById(id);
  }
}
