import { z } from "zod";

export interface CreateCourseInputDTO {
  id: string;
  name: string;
  lessons: number;
}

export interface CreateCourseOutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
  };
}

export const CreateCourseSchema = z
  .object({
    id: z
      .string({
        required_error: "'id' é obrigatório",
        invalid_type_error: "'id' deve ser do tipo string",
      })
      .min(4, "deve ter no mínimo 4 caracteres"),
    name: z
      .string({
        required_error: "'name'é obrigatório",
        invalid_type_error: "'name'deve ser do tipo string",
      })
      .min(2, "'name' deve possuir no mínimo 2 caracteres"),
    lessons: z
      .number({
        required_error: "'lessons'é obrigatório",
        invalid_type_error: "'lessons'deve ser um número",
      })
      .gt(1, "'lessons'deve ser maior ou igual a 1"),
  })
  .transform((data) => data as CreateCourseInputDTO);
