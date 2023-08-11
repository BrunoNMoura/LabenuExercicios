import z from 'zod'

export interface  CreateNewsInputDTO {
    title:string,
    description:string,
    author:string
}


export const CresteNewsSchema = z.object({
    title: z.string().min(10),
    description: z.string().min(20),
    author: z.string().min(3).startsWith("a")
}).transform(data=>data as CreateNewsInputDTO)