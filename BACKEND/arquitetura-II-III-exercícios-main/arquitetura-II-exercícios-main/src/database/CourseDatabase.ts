import { CourseDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class CourseDatabase extends BaseDatabase {
    public static TABLE_COURSES = "courses"

    public async findCourses (id: string | undefined):Promise<CourseDB[]> {
        let courseDB
        
        if(id) {
            const result: CourseDB[] = await CourseDatabase
            .connection(CourseDatabase.TABLE_COURSES)
            .where({id})
            courseDB = result
        }else {
            const result: CourseDB[]= await CourseDatabase
            .connection(CourseDatabase.TABLE_COURSES)

            courseDB = result
        }
        return courseDB
    }
    public async findCourseById(id:string): Promise<CourseDB | undefined>{
        const [courseDB]: CourseDB[] | undefined[] = await CourseDatabase
        .connection(CourseDatabase.TABLE_COURSES)
        .where({id})

        return courseDB
    }
    public async insertCourse(newCourseDB:CourseDB): Promise<void>{
        await BaseDatabase
        .connection(CourseDatabase.TABLE_COURSES)
        .insert(newCourseDB)
    }

    public async updateCourseById(idToEdit:string,putCourseDB: CourseDB): Promise<void>{
        await CourseDatabase.connection(CourseDatabase.TABLE_COURSES).update(putCourseDB).where({id:idToEdit})
    }

    public async deleteCourseById(id:string): Promise<void>{
        await CourseDatabase.connection(CourseDatabase.TABLE_COURSES).del().where({id})
    }
}