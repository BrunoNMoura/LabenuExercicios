import { AuthorsDatabase } from "../database/AuthorsDatabase";
import { Authors } from "../models/Authors";


export class AuthorsBusiness{
    constructor (
        private authorsDatabase: AuthorsDatabase
    ){}

    public getlAllAuthors = async ():Promise<Authors[]>=>{
        const authorsData = await this.authorsDatabase.getAllAuthors()

        const authors: Authors[] = authorsData.map((author)=>new Authors(
            author.id,
            author.name,
            author.cpf
            )
        )
        return authors
    }
}