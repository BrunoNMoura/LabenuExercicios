import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";
import { CourseBusiness } from "../business/CourseBusiness";
import { ZodError } from "zod";
import { CreateCourseSchema } from "../dtos/createdCourse.dto";
import { EditCourseSchema } from "../dtos/editCourse.dto";
import { DeleteCourseSchema } from "../dtos/delete.Course.dto";
import { getCourseSchema } from "../dtos/getCourses.dto";
export class CourseController {
  constructor(private courseBusiness: CourseBusiness) {}

  public getCourses = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = getCourseSchema.parse( {q:req.query.id}) ;

      const output = await this.courseBusiness.getCourses(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public createCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = CreateCourseSchema.parse({
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      });

      const output = await this.courseBusiness.createCourse(input);

      res.status(201).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public updateCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = EditCourseSchema.parse({
        idToEdit: req.params.id,
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      });

      const output = await this.courseBusiness.updateCourse(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);
      
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public deleteCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = DeleteCourseSchema.parse ({ idToDelete: req.params.id });

      const output = await this.courseBusiness.deleteCourse(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message); //aqui incluimos o método status com o código do erro correto
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
