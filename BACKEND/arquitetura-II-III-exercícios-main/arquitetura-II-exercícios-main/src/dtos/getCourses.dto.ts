import { z } from "zod";

export interface GetCourseInputDTO {
  q?: string;
}

export interface GetCourseOutputDTO {
  id:string;
  name:string;
  lessons:number;
}

export const getCourseSchema = z
  .object({
    q: z.string().min(1,'deve ter no mínimo 1 caracter').optional(),
  })
  .transform((data) => data as GetCourseInputDTO);