import { CarDatabase } from "../database/CarDatabase";
import { Car } from "../models/Car";
import { CarDB } from "../types";

export class CarBusiness {
  public getCars = async (input: any): Promise<Car[]> => {
    const { model } = input;

    const carDatabase = new CarDatabase();
    const carsDB = await carDatabase.findCars(model);

    const cars: Car[] = carsDB.map(
      (carDB) =>
        new Car(
          carDB.id,
          carDB.model,
          carDB.brand,
          carDB.car_year,
          carDB.created_at
        )
    );

    return cars;
  };

  public createdCar = async (
    input: any
  ): Promise<{
    message: string;
    car: Car;
  }> => {
    const { id, model, brand, car_year } = input;

    if (typeof id !== "string") {
      throw new Error("'id' must be string");
    }
    if (typeof model !== "string") {
      throw new Error("'model' must be string");
    }
    if (typeof brand !== "string") {
      throw new Error("'brand' must be string");
    }
    if (typeof car_year !== "number") {
      throw new Error("'car_year' must be number");
    }

    const carDatabase = new CarDatabase();
    const carDBExists = await carDatabase.findCarById(id);

    if (carDBExists) {
      throw new Error("'id'already exists");
    }

    const newCar = new Car(
      id,
      model,
      brand,
      car_year,
      new Date().toISOString()
    );

    const newCarDB: CarDB = {
      id: newCar.getId(),
      model: newCar.getModel(),
      brand: newCar.getBrand(),
      car_year: newCar.getYear(),
      created_at: newCar.getCreatedAt(),
    };

    await carDatabase.createdCar(newCarDB);

    const output = {
      message: "Car added successfully!",
      car: newCar,
    };
    return output;
  };

  public updateCar = async (input: any):Promise<{
    message: string;
    car: Car;
}> => {
    const { id, newId, newModel, newBrand, newYear } = input;

    if (newId) {
      if (typeof newId !== "string") {
        throw new Error("The 'id' must be a string");
      }
      if (newId[0] !== "c") {
        throw new Error("Id must start with character 'v'");
      }
      if (newId.length < 4) {
        throw new Error("The 'id' must be at least four characters long");
      }
    }

    //check model

    if (newModel) {
      if (typeof newModel !== "string") {
        throw new Error("The 'newModel' must be a string");
      }
      if (newModel.length < 3) {
        throw new Error(
          "The 'newModel' must be at least three characters long"
        );
      }
    }

    //check brand

    if (newBrand) {
      if (typeof newBrand !== "string") {
        throw new Error("The 'newBrand' must be a string");
      }
      if (newBrand.length < 3) {
        throw new Error(
          "The 'newBrand' must be at least three characters long"
        );
      }
    }

    //check year

    if (newYear) {
      if (typeof newYear !== "number") {
        throw new Error("The 'newYear' must be a number");
      }
      if (newYear <= 0) {
        throw new Error("The 'newYear' must be greater than zero");
      }
    }

    const carDatabase = new CarDatabase();
    const carDB = await carDatabase.findCarById(id);

    if (!carDB) {
      throw new Error("'id' not found");
    }

    const car = new Car(
      newId || carDB.id,
      newModel || carDB.model,
      newBrand || carDB.brand,
      newYear || carDB.car_year,
      carDB.created_at
    );

    const putCarDB: CarDB = {
      id: car.getId(),
      model: car.getModel(),
      brand: car.getBrand(),
      car_year: car.getYear(),
      created_at: car.getCreatedAt(),
    };

    await carDatabase.updateCarById(putCarDB);

    const output = {
      message: "Car updated successufully!",
      car: car,
    };
    return output;
  };

  public deleteCar = async (input: any):Promise<{
    message: string;
}> => {
    const { id } = input;

    const carDatabase = new CarDatabase();
    const carDB = await carDatabase.findCarById(id);
    if (!carDB) {
      throw new Error("car not found!");
    }

    await carDatabase.deleteCarById(id);

    const output = { message: "Car delete successfully!" };
    return output;
  };
}
