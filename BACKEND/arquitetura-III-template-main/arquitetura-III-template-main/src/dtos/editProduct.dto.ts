import { z } from "zod";

export interface EditProductInputDTO {
  idToEdit: string;
  id?: string;
  name?: string;
  price?: number;
}

export interface EditProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createdAt: string;
  };
}

export const EditProductSchema = z
  .object({
    idToEdit: z
      .string()
      .min(4,'deve ter no mínimo 4 caracteres'),
    id: z
      .string({
        invalid_type_error: "'id'deve ser do tipo string",
      })
      .min(1)
      .optional(),
    name: z
      .string({        
        invalid_type_error: "'name' deve ser do tipo string",
      })
      .min(2,"'name' deve possuir no mínimo 2 caracteres")
      .optional(),
    price: z
      .number({
        invalid_type_error: "'price' deve ser do tipo number",
      })
      .gt(0, "'price' deve ser maior ou igual a 0")
      .optional(),
  })
  .transform((data) => data as EditProductInputDTO);
