import express from "express";
import cors from "cors";
import { userRouter } from "./router/userRoter";
import { accountRouter } from "./router/accountRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});


app.use("/users", userRouter);

app.use("/accounts", accountRouter);

// tem que ficar no final de tudo para substituir o try cath
// instalar lib: "express-async-errors"
// adaptar a mensagens do erro para cada caso
// app.use((err:any, req: Request, res: Response, _:any) => {
//   res.status(err.statusCode || 500).send(err.message );
// });