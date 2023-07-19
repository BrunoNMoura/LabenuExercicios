import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./database/knex";
import { TVideo } from "./types";
import { Video } from "./models/Video";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!" });
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.get("/videos", async (req: Request, res: Response) => {
  try {
    const videoId = req.query.id;
    if (videoId !== undefined) {
      if (typeof videoId !== "string") {
        res.status(400);
        throw new Error("The value has to be a string");
      }
      if (videoId[0] !== "v") {
        res.status(400);
        throw new Error("Id must start with character 'v'");
      }
      if (videoId.length < 4) {
        throw new Error("The 'id' must be at least four characters long");
      }
      const [idVideo] = await db("videos").where({ id: videoId });
      if (idVideo) {
        res.status(200).send(idVideo);
      }
    }
    const allVideos: TVideo[] = await db("videos");

    const result = allVideos.map((video) => {
      return new Video(
        video.id,
        video.title,
        video.time_seconds,
        video.created_at
      );
    });
    res.status(200).send(result);
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
});

app.post("/videos", async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const title = req.body.title;
    const time_seconds = req.body.time_seconds;

    //check id

    if (id === undefined || id === "") {
      res.status(400);
      throw new Error("put a 'id' in the string");
    }

    if (id[0] !== "v") {
      res.status(400);
      throw new Error("Id must start with character 'v'");
    }

    if (id.length < 4) {
      res.status(400);
      throw new Error("The 'id' must be at least four characters long");
    }

    //check name
    if (title === undefined || title === "") {
      res.status(400);
      throw new Error("put a name in the string");
    }
    if (typeof title !== "string") {
      res.status(400);
      throw new Error("The name must be a string");
    }
    if (title.length < 3) {
      res.status(400);
      throw new Error("The name must be at least three characters long");
    }

    // check time_seconds

    if (time_seconds === undefined || time_seconds === "") {
      res.status(400);
      throw new Error("put a number");
    }
    if (typeof time_seconds !== "number") {
      res.status(400);
      throw new Error("the time_seconds must be a number");
    }

    //check only id

    const [videoId] = await db("videos").where({ id: id });
    if (videoId) {
      res.status(400);
      throw new Error("The given ID already exists");
    }

    const newVideo: Video = new Video(id, title, time_seconds);

    await db("videos").insert({
      id: newVideo.getId(),
      title: newVideo.getTitle(),
      time_seconds: newVideo.getTimeSeconds(),
      created_at: newVideo.getCreatedAt(),
    });

    const [idVideo]: TVideo[] = await db("videos").where({ id });

    // const result = new Video(
    //   idVideo.id,
    //   idVideo.title,
    //   idVideo.time_seconds,
    //   idVideo.created_at
    // )

    res.status(201).send("Video registration successfully completed!");
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
});

app.put("/videos/:id", async (req: Request, res: Response) => {
  try {
    const idToEdidt = req.params.id;

    const newId = req.body.id;
    const newTitle = req.body.title;
    const newTimeSeconds = req.body.time_seconds;

    //check id
    if (newId === undefined || newId === "") {
      res.status(400);
      throw new Error("put ID in the string");
    }
    if (typeof newId !== "string") {
      res.status(422);
      throw new Error("The 'id' must be a string");
    }
    if (newId[0] !== "v") {
      res.status(400);
      throw new Error("Id must start with character 'v'");
    }
    if (newId.length < 4) {
      res.status(400);
      throw new Error("The 'id' must be at least four characters long");
    }
    //check title

    if (newTitle === undefined || newTitle === "") {
      res.status(400);
      throw new Error("put a title in the string");
    }
    if (typeof newTitle !== "string") {
      res.status(422);
      throw new Error("The 'title' must be a string");
    }
    if (newTitle.length < 3) {
      res.status(400);
      throw new Error("The 'title' must be at least three characters long");
    }

    //check time_secunds

    if (newTimeSeconds === undefined || newTimeSeconds === "") {
      res.status(400);
      throw new Error("put a number");
    }

    if (typeof newTimeSeconds !== "number") {
      res.status(422);
      throw new Error("The time_secunds must be a number");
    }

    if (newTimeSeconds <= 0) {
      res.status(400);
      throw new Error("Time_secunds must be greater than zero");
    }

    const [videoDB]: TVideo[] = await db("videos").where({ id: idToEdidt });

    if (!videoDB) {
      res.status(400);
      throw new Error("'id' not found");
    }

    const video = new Video(
      newId || videoDB.id,
      newTitle || videoDB.title,
      newTimeSeconds || videoDB.time_seconds,
      videoDB.created_at
    );
  
    await db("videos")
      .update({
        id: video.getId(),
        title: video.getTitle(),
        time_seconds: video.getTimeSeconds(),
        created_at: video.getCreatedAt(),
      })
      .where({ id: idToEdidt });

    res.status(200).send("Video changed successfully!");
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
});

app.delete("/videos/:id", async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;

    if (idToDelete[0] !== "v") {
      res.status(400);
      throw new Error("Id must start with character 'v'");
    }
    if (idToDelete.length < 4) {
      res.status(400);
      throw new Error("The 'id' must be at least four characters long");
    }

    const [videoDB] = await db("videos").where({ id: idToDelete });
    if (!videoDB) {
      res.status(400);
      throw new Error("User not found!");
    }

    const video = new Video(
      videoDB.id,
      videoDB.title,
      videoDB.time_seconds,
      videoDB.created_at
    );
    await db("videos").del().where({ id: video.getId() });
    res.status(200).send("User deleted successfully!");
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
});
