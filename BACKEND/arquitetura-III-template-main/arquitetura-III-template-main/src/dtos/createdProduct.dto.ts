import z from 'zod'
export interface CreateProductInputDTO {
  id: string;
  name: string;
  price: number;
}

export interface CreateProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createdAt: string;
  };
}

export const CreateProductSchema = z.object({
  id: z.string({
    required_error:"'id' é obrigatório",
    invalid_type_error:"'id'deve ser do tipo string"
  })
  .min(4,'deve ter no mínimo 4 caracteres' ),
  name: z.string({
    required_error:"'name' é obrigatório",
    invalid_type_error:"'name' deve ser do tipo string"
  })
  .min(2,"'name' deve possuir no mínimo 2 caracteres"),
  price: z.number({
    required_error:"'price'é obrigatório",
    invalid_type_error:"'price' deve ser do tipo number"
  })
  .gt(0, "'price' deve ser maior ou igual a 0"),
}).transform(data => data as CreateProductInputDTO)