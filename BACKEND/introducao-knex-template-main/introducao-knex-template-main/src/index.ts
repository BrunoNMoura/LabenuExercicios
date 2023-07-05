import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./database/knex";

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

//pratica guiada 1

app.get("/bands", async (req: Request, res: Response) => {
  try {
    const result = await db.raw(`SELECT * FROM bands`);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error.message);

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

//pratica guiada 2

app.post("/bands", async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo texto");
    }
    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' deve ser do tipo texto");
    }
    if (id.length < 1) {
      res.status(400);
      throw new Error("'id' não deve estar vazio");
    }
    if (name.length < 2) {
      res.status(400);
      throw new Error("'name' não deve estar vazio");
    }
    // ("b001", "O Rappa"),('b002','Legião Urbana'),
    // ('b003','Skank')
    await db.raw(`INSERT INTO bands (id, name) VALUES ("${id}","${name}")`);

    res.status(200).send("Banda inserida com sucesso");
  } catch (error: any) {
    console.log(error.message);

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

// pratica guiada 3

// por uma questão de praticidade, vamos mostrar somente o try do try/catch

app.put("/bands/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newId = req.body.id;
    const newName = req.body.name;

    if (newId !== undefined) {
      if (typeof newId !== "string") {
        res.status(400);
        throw new Error("'id' deve ser tipo texto");
      }
      if (newId.length < 1) {
        res.status(400);
        throw new Error("'id' deve possuir no mínimo 2 caractere");
      }
    }

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        res.status(400);
        throw new Error("'name' deve ser do tipo texto");
      }

      if (newName.length < 2) {
        res.status(400);
        throw new Error("'name' deve possuir no mínimo 2 caracteres");
      }
    }
    // verificamos se o user a ser editado realmente existe
    const [band] = await db.raw(`
					SELECT * FROM bands
					WHERE id = "${id}";
				`); // desestruturamos para encontrar o primeiro item do array

    //se existir, aí sim podemos editá-lo
    if (band) {
      await db.raw(`
							UPDATE bands
							SET
								id = "${newId || band.id}",
								name = "${newName || band.name}"
								
							WHERE
								id = "${id}";
						`);
    } else {
      res.status(404);
      throw new Error("'id' não encontrada");
    }
    res.status(200).send({ message: "Atualização realizada com sucesso" });
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

//exercício de fixação

app.post("/songs", async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const band_id = req.body.band_id;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo texto");
    }
    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' deve ser do tipo texto");
    }
    if (typeof band_id !== "string") {
      res.status(400);
      throw new Error("'band_id' deve ser do tipo texto");
    }
    if (id.length < 1) {
      res.status(400);
      throw new Error("'id' não deve estar vazio");
    }
    if (name.length < 2) {
      res.status(400);
      throw new Error("'name' não deve estar vazio");
    }
    if (band_id.length < 1) {
      res.status(400);
      throw new Error("'band_id' não deve estar vazio");
    }
    await db.raw(
      `INSERT INTO songs (id, name, band_id) VALUES ("${id}","${name}", "${band_id}")`
    );
    res.status(200).send("Musica inserida com sucesso!");
  } catch (error: any) {
    console.log(error.message);

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

app.get("/songs", async (req: Request, res: Response) => {
  try {
    const result = await db.raw(`SELECT * FROM songs;`);
    res.status(200).send(result);
  } catch (error: any) {
    console.log(error.message);

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

app.put("/songs/:id", async(req:Request,res:Response)=>{
  try {

    const id = req.params.id;

    const newId = req.body.id;
    const newName = req.body.name;
    const newBand_id = req.body.band_id;

    if (newId !== undefined) {
      if (typeof newId !== "string") {
        res.status(400);
        throw new Error("'id' deve ser tipo texto");
      }
      if (newId.length < 1) {
        res.status(400);
        throw new Error("'id' deve possuir no mínimo 2 caractere");
      }
    }

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        res.status(400);
        throw new Error("'name' deve ser do tipo texto");
      }

      if (newName.length < 2) {
        res.status(400);
        throw new Error("'name' deve possuir no mínimo 2 caracteres");
      }
    }
  
    const [band] = await db.raw(`SELECT * FROM bands WHERE id = "${newBand_id}" `)    
    if(!band){
     res.status(400).send("Banda não encontrada!")
    }
    // verificamos se o user a ser editado realmente existe
    const [song] = await db.raw(`
					SELECT * FROM songs
					WHERE id = "${id}";
				`); // desestruturamos para encontrar o primeiro item do array

    //se existir, aí sim podemos editá-lo
       if (song) {
      await db.raw(`
							UPDATE songs
							SET
								id = "${newId || song.id}",
								name = "${newName || song.name}",
								band_id = "${newBand_id || song.band_id}"
							WHERE
								id = "${id}";
						`);
    } else {
      res.status(404);
      throw new Error("'id' não encontrada");
    }
    res.status(200).send({ message: "Atualização realizada com sucesso" });
    
  } catch (error:any) {
    console.log(error.message);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
})