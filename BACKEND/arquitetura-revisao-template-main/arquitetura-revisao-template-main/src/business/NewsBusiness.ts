import { AuthorsDatabase } from "../database/AuthorsDatabase";
import { NewsDatabase } from "../database/NewsDatabase";
import { CreateNewsInputDTO } from "../dtos/createNews.dto";
import { DeleteNewsInputDTO } from "../dtos/deleteNews.dto";
import { EditNewsInputDTO } from "../dtos/editNews.dto";
import { AuthorsDBModel } from "../models/Authors";
import { News, NewsDBModel } from "../models/News";

export class NewsBusiness {
  constructor(private newsDatabase: NewsDatabase) {}
  public getAllNews = async (): Promise<News[]> => {
    const newsData = await this.newsDatabase.getAllNews();

    const news: News[] = newsData.map(
      (newsDB) =>
        new News(
          newsDB.id,
          newsDB.title,
          newsDB.description,
          newsDB.published_at,
          newsDB.author
        )
    );

    return news;
  };

  public create = async (input: CreateNewsInputDTO): Promise<void> => {
    const { title, description, author } = input;

    const authorDatabase = new AuthorsDatabase();

    const authors: AuthorsDBModel[] = await authorDatabase.getAllAuthors();

    const authorExist = authors.find((element) => element.id === author);

    if (!authorExist) {
      throw new Error("Id do autor inválido");
    }
    //gerar número aleatório =>
    const id: string = "n" + Math.floor(Math.random() * 256).toString();

    const today = new Date().toISOString();

    const news = new News(id, title, description, today, author);

    await this.newsDatabase.creatNews(news.toDBModel());
  };

  public edit = async (input: EditNewsInputDTO): Promise<void> => {
    const { id, title, description } = input;

    const news: NewsDBModel[] = await this.newsDatabase.getAllNews();

    const newsIdExists = news.find((element) => element.id === id);

    if (!newsIdExists) {
      throw new Error("id da noticia não encontrado");
    }

    const today = new Date().toISOString();

    const newsUpdate = new News(
      id,
      title || newsIdExists.title,
      description || newsIdExists.description,
      today,
      newsIdExists.author
    );

    await this.newsDatabase.editNews(newsUpdate.toDBModel());
  };

  public delete = async (input:DeleteNewsInputDTO)=>{
    const {id} = input

    const news: NewsDBModel[] = await this.newsDatabase.getAllNews();

    const newsIdExists = news.find((element) => element.id === id);

    if (!newsIdExists) {
      throw new Error("id da noticia não encontrado");
    }

    await this.newsDatabase.deleteNews(input)

  }
}
