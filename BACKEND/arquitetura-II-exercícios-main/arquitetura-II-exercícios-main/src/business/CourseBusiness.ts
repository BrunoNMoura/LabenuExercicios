import { CourseDatabase } from "../database/CourseDatabase";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Course } from "../models/Course";
import { CourseDB } from "../types";

export class CourseBusiness {
  public getCourses = async (id: string | undefined) => {
    const courseDatabase = new CourseDatabase();
    const courseDB = await courseDatabase.findCourses(id);

    const courses: Course[] = courseDB.map(
      (courseDB) => new Course(courseDB.id, courseDB.name, courseDB.lessons)
    );

    return courses;
  };

  public createCourse = async (input: any):Promise<{
    message: string;
    course: Course;
}> => {
    const { id, name, lessons } = input;
    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }
    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }
    if (typeof lessons !== "number") {
      throw new BadRequestError("'lessons' deve ser número");
    }

    const courseDatabase = new CourseDatabase();
    const courseDBExists = await courseDatabase.findCourseById(id);

    if (courseDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newCourse = new Course(id, name, lessons);

    const newCourseDB: CourseDB = {
      id: newCourse.getId(),
      name: newCourse.getName(),
      lessons: newCourse.getLessons(),
    };

    await courseDatabase.insertCourse(newCourseDB);

    const output = {
      message: "Cadastro realizado com sucesso",
      course: newCourse,
    };
    return output;
  };

  public updateCourse = async (input: any):Promise<{
    message: string;
    course: Course;
}> => {
    const { id, newId, newName, newLessons } = input;

    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof newId !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }
    if (typeof newName !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }
    if (typeof newLessons !== "number") {
      throw new BadRequestError("'lessons' deve ser número");
    }

    const courseDatabase = new CourseDatabase();
    const courseDB = await courseDatabase.findCourseById(id);

    if (!courseDB) {
      throw new Notification("'id' não encontrado");
    }

    const course = new Course(
      newId || courseDB.id,
      newName || courseDB.name,
      newLessons || courseDB.lessons
    );

    const putCourseDB: CourseDB = {
      id: course.getId(),
      name: course.getName(),
      lessons: course.getLessons(),
    };

    await courseDatabase.updateCourseById(putCourseDB);

    const output = {
      message: "'course' atualizado com sucesso",
      course: course,
    };

    return output;
  };

  public deleteCourse = async (input: any):Promise<{
    message: string;
}> => {
    const { id } = input;

    const courseDatabase = new CourseDatabase();
    const courseDB = await courseDatabase.findCourseById(id);
    if (!courseDB) {
      throw new NotFoundError("'course' não encontrado");
    }

    await courseDatabase.deleteCourseById(id);

    const output = {
      message: "Course deletado com sucesso!",
    };
    return output;
  };
}
