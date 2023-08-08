import { z } from "zod";

export interface GetProductInputDTO {
  q?: string;
}

export interface GetProductOutpuDTO {
   
    id: string;
    name: string;
    price: number;
    createdAt: string;
 
}

export const getProductSchema = z
  .object({
    q: z.string().min(1,'deve ter no mínimo 1 caracter'),
  })
  .transform((data) => data as GetProductInputDTO);
