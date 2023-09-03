import { z } from "zod";
import { USER_ROLES } from "../../models/User";

export interface DeleteUserInputDTO {
  idToDelete: string,
  token:string
}

export interface DeleteUserOutputDTO {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: USER_ROLES;
    createdAt: string;
  };
}

export const DeleteUserScherma = z.object({
    idToDelete: z.string().min(4),
    token: z.string().min(1)
}).transform((data)=>data as DeleteUserInputDTO)