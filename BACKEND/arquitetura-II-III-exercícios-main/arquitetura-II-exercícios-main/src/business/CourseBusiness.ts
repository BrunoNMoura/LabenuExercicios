import { CourseDatabase } from "../database/CourseDatabase";
import {
  CreateCourseInputDTO,
  CreateCourseOutputDTO,
} from "../dtos/createdCourse.dto";
import { DeleteCourseInputDTO } from "../dtos/delete.Course.dto";
import {
  EditCourseInputDTO,
  EditCourseOutputDTO,
} from "../dtos/editCourse.dto";
import { GetCourseInputDTO, GetCourseOutputDTO } from "../dtos/getCourses.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Course } from "../models/Course";
import { CourseDB } from "../types";

export class CourseBusiness {
  constructor(private courseDatabase: CourseDatabase) {}

  public getCourses = async (input: GetCourseInputDTO):Promise<GetCourseOutputDTO[]> => {
    const {q} = input
   // const courseDatabase = new CourseDatabase();
    const courseDB = await this.courseDatabase.findCourses(q);

    const courses: Course[] = courseDB.map((courseDB)=> new Course(
      courseDB.id,
      courseDB.name,
      courseDB.lessons
    ))

    const output: GetCourseOutputDTO[] = courses.map(course => ({
      id: course.getId(),
      name: course.getName(),
      lessons: course.getLessons(),
    }))

    return output;
  };

  public createCourse = async (
    input: CreateCourseInputDTO
  ): Promise<CreateCourseOutputDTO> => {
    const { id, name, lessons } = input;

    //const courseDatabase = new CourseDatabase();
    const courseDBExists = await this.courseDatabase.findCourseById(id);

    if (courseDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newCourse = new Course(id, name, lessons);

    const newCourseDB: CourseDB = {
      id: newCourse.getId(),
      name: newCourse.getName(),
      lessons: newCourse.getLessons(),
    };

    await this.courseDatabase.insertCourse(newCourseDB);

    const output: CreateCourseOutputDTO = {
      message: "Cadastro realizado com sucesso",
      course: {
        id: newCourse.getId(),
        name: newCourse.getName(),
        lessons: newCourse.getLessons(),
      },
    };
    return output;
  };

  public updateCourse = async (
    input: EditCourseInputDTO
  ): Promise<EditCourseOutputDTO> => {
    const { idToEdit, id, name, lessons } = input;

    const courseDB = await this.courseDatabase.findCourseById(idToEdit);

    if (!courseDB) {
      throw new NotFoundError("'id' não encontrado");
    }

    const course = new Course(courseDB.id, courseDB.name, courseDB.lessons);

    id && course.setId(id)
    name && course.setName(name)
    lessons && course.setLessons(lessons)

    const putCourseDB: CourseDB = {
      id: course.getId(),
      name: course.getName(),
      lessons: course.getLessons(),
    };

    await this.courseDatabase.updateCourseById(idToEdit, putCourseDB);

    const output: EditCourseOutputDTO = {
      message: "'course' atualizado com sucesso",
      course: {
        id: course.getId(),
        name: course.getName(),
        lessons: course.getLessons(),
      },
    };

    return output;
  };

  public deleteCourse = async (
    input: DeleteCourseInputDTO
  ): Promise<{
    message: string;
  }> => {
    const { idToDelete } = input;

    // const courseDatabase = new CourseDatabase();
    const courseDB = await this.courseDatabase.findCourseById(idToDelete);
    if (!courseDB) {
      throw new NotFoundError("'course' não encontrado");
    }
    const course = new Course(courseDB.id, courseDB.name, courseDB.lessons);

    await this.courseDatabase.deleteCourseById(courseDB.id);

    const output = {
      message: "Course deletado com sucesso!",
      course: {
        id: course.getId(),
        name: course.getName(),
        lessons: course.getLessons(),
      }
    };
    return output;
  };
}
