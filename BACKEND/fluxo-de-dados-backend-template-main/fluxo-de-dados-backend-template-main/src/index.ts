import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./database";
import { ACCOUNT_TYPE } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/accounts", (req: Request, res: Response) => {
  res.send(accounts);
});

app.get("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = accounts.find((account) => account.id === id);

    if (!result) {
      throw new Error("conta não encopntrada. Verifique a 'id");
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(404);
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.status(500);
        res.send("Erro inesperado");
      }
    }
  }
});

app.delete("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (id && id[0] !== "a") {
      res.status(400);
      throw new Error("Id deve começar com caractere 'a'");
    }

    const accountIndex = accounts.findIndex((account) => account.id === id);

    if (accountIndex < 0) {
      res.statusCode = 404;
      throw new Error("Conta não encontrada! verifique a id");
    }
    accounts.splice(accountIndex, 1);
    res.status(200).send("Item deletado com sucesso");
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
});

app.put("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newId = req.body.id as string | undefined;
    const newOwnerName = req.body.ownerName as string | undefined;
    const newBalance = req.body.balance;
    const newType = req.body.type;

    //verifica o newBalance

    if (newBalance !== undefined) {
      if (typeof newBalance !== "number") {
        res.status(422);
        throw new Error("O valor de 'balance' deve ser numérico.");
      }
      if (newBalance < 0) {
        res.status(400);
        throw new Error("'balance' precisa ter um valor maior que zero.");
      }
    }

    //vreificar o newType

    if (newType !== undefined) {
      if (
        newType !== ACCOUNT_TYPE.BLACK &&
        newType !== ACCOUNT_TYPE.GOLD &&
        newType !== ACCOUNT_TYPE.PLATINUM
      ) {
        res.status(400);
        throw new Error(
          "O 'type' precisa ser um dos seguintes valores:\nBlack\nGold\nPlatinum"
        );
      }
    }

    //verificar o newId

    if (newId !== undefined) {
      if (newId && newId[0] !== "a") {
        res.status(400);
        throw new Error("Id deve começar com caractere 'a'");
      }
    }

    //verificar o newOwnerName

    if (newOwnerName !== undefined) {
      if (typeof newOwnerName !== "string") {
        res.status(400);
        throw new Error(
          "O ownerName deve ser uma string"
        );
      }
      if (newOwnerName.length < 2) {
        res.status(400);
        throw new Error(
          "O ownerName deve conter no mínimo dois caracteres"
        );
      }
    }

    const account = accounts.find((account) => account.id === id);

    if (account) {
      account.id = newId || account.id;
      account.ownerName = newOwnerName || account.ownerName;
      account.type = newType || account.type;

      account.balance = newBalance >= 0 ? newBalance : account.balance;
    }

    res.status(200).send("Atualização realizada com sucesso");
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
});
