import { z } from "zod";
export interface EditCourseInputDTO{
    idToEdit:string;
    id?:string;
    name?:string;
    lessons?:number;
}

export interface EditCourseOutputDTO{
    message: string;
    course:{
        id:string;
        name:string;
        lessons:number;
    }
}

export const EditCourseSchema = z.object({
    idToEdit: z.string()
    .min(4, "'id'deve ter no mínimo 4 caracteres"),
    id: z.string({
        invalid_type_error:"'id'deve ser do tipo string"
    })
    .min(1)
    .optional(),
    name: z.string({
        invalid_type_error:"'name' deve ser do tipo string",
    })
    .min(2,"'name' deve possuir no mínimo 2 caracteres")
    .optional(),
    lessons: z.number({
        invalid_type_error:"'lessons' deve ser do tipo number",
    })
    .gt(1,"'lessons' deve ser maior ou igual a 1")
    .optional()
}).transform((data)=>data as EditCourseInputDTO)