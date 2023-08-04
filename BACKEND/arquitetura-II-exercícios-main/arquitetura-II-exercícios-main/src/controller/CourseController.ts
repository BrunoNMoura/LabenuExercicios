import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";
import { CourseBusiness } from "../business/CourseBusiness";
export class CourseController {
  public getCourses = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.query.id as string | undefined;

      const courseBusiness = new CourseBusiness();
      const output = await courseBusiness.getCourses(id);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public createCourse = async (req: Request, res: Response):Promise<void> => {
    try {
      const input = {
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };

      const courseBusiness = new CourseBusiness();
      const output = await courseBusiness.createCourse(input);

      res.status(201).send(output);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public updateCourse = async (req: Request, res: Response):Promise<void> => {
    try {
      const input = {
        id: req.params.id,
        newId: req.body.id,
        newName: req.body.name,
        newLessons: req.body.lessons,
      };

      const courseBusiness = new CourseBusiness();
      const output = await courseBusiness.updateCourse(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public deleteCourse = async (req: Request, res: Response):Promise<void> => {
    try {
      const input = { id: req.params.id };

      const courseBusiness = new CourseBusiness();
      const output = await courseBusiness.deleteCourse(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
