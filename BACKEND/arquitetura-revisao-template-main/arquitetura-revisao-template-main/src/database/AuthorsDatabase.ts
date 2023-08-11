import { AuthorsDBModel } from "../models/Authors";
import { BaseDatabase } from "./BaseDatabase";


export class AuthorsDatabase extends BaseDatabase {
    private static AUTHORS_TABLE = "authors"

    public getAllAuthors
= async (): Promise<AuthorsDBModel[]> => {
    const result: AuthorsDBModel[] = await BaseDatabase.connection(AuthorsDatabase.AUTHORS_TABLE)

    return result
}
}