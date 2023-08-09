import { z } from "zod";

export interface DeleteCourseInputDTO {
    idToDelete: string;
}

export interface DeleteCourseOutputDTO {
    message: string;
    course:{
        id:string;
        name:string;
        lessons:number;
    }
}

export const DeleteCourseSchema = z
.object({
    idToDelete: z.string().min(4, "'id'deve conter no mínimo 4 caracteres")
}).transform((data)=>data as DeleteCourseInputDTO)