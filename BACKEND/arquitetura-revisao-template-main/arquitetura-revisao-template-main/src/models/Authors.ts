export class Authors {
  constructor(private id: string, private name: string, private cpf: number) {}
}

export interface AuthorsDBModel {
  id: string;
  name: string;
  cpf: number;
}
