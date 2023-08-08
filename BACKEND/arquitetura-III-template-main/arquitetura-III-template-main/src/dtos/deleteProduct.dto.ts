import { z } from "zod";

export interface DeleteProductInputDTO {
  idToDelete: string;
}

export interface DeleteProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createdAt: string;
  };
}

export const DeleteProductSchema = z
  .object({
    idToDelete: z.string().min(4,'deve ter no mínimo 4 caracteres'),
  })
  .transform((data) => data as DeleteProductInputDTO);
