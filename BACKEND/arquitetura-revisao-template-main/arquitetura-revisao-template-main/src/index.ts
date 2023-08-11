import express from "express";
import cors from "cors";
import { authorsRouter } from "./router/authorsRouter";
import { newsRouter } from "./router/newsRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor está rodando na porta 3003");
});

app.use("/news", newsRouter);

app.use("/authors", authorsRouter);
