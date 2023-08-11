import express from 'express'
import { AuthorsController } from '../controller/AuthorsController'
import { AuthorsBusiness } from '../business/AuthorsBusiness'
import { AuthorsDatabase } from '../database/AuthorsDatabase'

export const authorsRouter = express.Router()

const authorsController = new AuthorsController(
    new AuthorsBusiness(
        new AuthorsDatabase()
    )
)

authorsRouter.get("/", authorsController.getAuthors)