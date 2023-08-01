import { Request, Response } from "express";
import { CarBusiness } from "../business/CarBusiness";
export class CarController {
  getCar = async (req: Request, res: Response): Promise<void> => {
    try {
      const input ={ model:req.query.model }

     const carBusiness = new CarBusiness()
     const output = await carBusiness.getCars(input)

      res.status(200).send(output);
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
      const input = { 
        id:req.body.id, 
        model:req.body.model, 
        brand:req.body.brand, 
        car_year:req.body.car_year 
      } 

      const carBusiness = new CarBusiness()
      const output = await carBusiness.createdCar(input)
      

      res.status(201).send(output);
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
     
      const input = {
        id:req.params.id,
        newId:req.body.id,
        newModel:req.body.model,
        newBrand:req.body.brand,
        newYear:req.body.car_year
      }

      const carBusiness = new CarBusiness()
      const output = await carBusiness.updateCar(input)

      res.status(200).send(output);
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
      const input = {id:req.params.id }

      const carBusiness = new CarBusiness()
      const output = await carBusiness.deleteCar(input)
      
      res.status(200).send(output);
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
