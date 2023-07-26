import { Request, Response } from "express";
import { CarDatabase } from "../database/CarDatabase";
import { CarDB } from "../types";
import { Car } from "../models/Car";
export class CarController {
  getCar = async (req: Request, res: Response): Promise<void> => {
    try {
      const model = req.query.model as string | undefined;

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

      res.status(200).send(cars);
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500);
      }
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.status(500).send("Unknown error");
      }
    }
  };
  createdCar = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id, model, brand, car_year } = req.body;
      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' must be string");
      }
      if (typeof model !== "string") {
        res.status(400);
        throw new Error("'model' must be string");
      }
      if (typeof brand !== "string") {
        res.status(400);
        throw new Error("'brand' must be string");
      }
      if (typeof car_year !== "number") {
        res.status(400);
        throw new Error("'car_year' must be number");
      }

      const carDatabase = new CarDatabase();
      const carDBExists = await carDatabase.findCarById(id);

      if (carDBExists) {
        res.status(400);
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

      res.status(201).send(newCar);
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500);
      }
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.status(500).send("Unknown error");
      }
    }
  };
  updateCar = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;

      const newId = req.body.id;
      const newModel = req.body.model;
      const newBrand = req.body.brand;
      const newYear = req.body.car_year;

      //check id
      if (newId) {
        if (typeof newId !== "string") {
        res.status(422);
        throw new Error("The 'id' must be a string");
      }
      if (newId[0] !== "c") {
        res.status(400);
        throw new Error("Id must start with character 'v'");
      }
      if (newId.length < 4) {
        res.status(400);
        throw new Error("The 'id' must be at least four characters long");
      }
      }
      
      //check model

      if (newModel) {
        if (typeof newModel !== "string") {
        res.status(422);
        throw new Error("The 'newModel' must be a string");
      }
      if (newModel.length < 3) {
        res.status(400);
        throw new Error(
          "The 'newModel' must be at least three characters long"
        );
      }
      }
      
      //check brand

      if (newBrand) {
        if (typeof newBrand !== "string") {
        res.status(422);
        throw new Error("The 'newBrand' must be a string");
      }
      if (newBrand.length < 3) {
        res.status(400);
        throw new Error(
          "The 'newBrand' must be at least three characters long"
        );
      }
      }
      
      //check year

      if (newYear) {
       if (typeof newYear !== "number") {
        res.status(422);
        throw new Error("The 'newYear' must be a number");
      }
      if (newYear <= 0) {
        res.status(400);
        throw new Error("The 'newYear' must be greater than zero");
      }
      }      

      const carDatabase = new CarDatabase();
      const carDB = await carDatabase.findCarById(id);

      if (!carDB) {
        res.status(404);
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

      res.status(200).send("Car changed successfully!");
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500);
      }
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.status(500).send("Unknown error");
      }
    }
  };
  deleteCar = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const carDatabase = new CarDatabase();
      const carDB = await carDatabase.findCarById(id);
      if (!carDB) {
        res.status(400);
        throw new Error("car not found!");
      }

      await carDatabase.deleteCarById(id);

      res.status(200).send("car deleted successfully!");
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500);
      }
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.status(500).send("Unknown error");
      }
    }
  };
}
