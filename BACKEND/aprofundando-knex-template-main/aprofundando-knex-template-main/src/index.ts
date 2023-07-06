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

//----------Get Band------------

app.get("/bands", async (req: Request, res: Response) => {
  try {
    //-------código verboso--------

    // const result = await db.raw(`
    //     SELECT * FROM bands;
    // `)

    //----------código builder resumido SELECT * bands-------------------
    const result = await db("bands");

    res.status(200).send(result);
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

//-------------------post band------------------------------------

app.post("/bands", async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' inválido, deve ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' inválido, deve ser string");
    }

    if (id.length < 1 || name.length < 1) {
      res.status(400);
      throw new Error("'id' e 'name' devem possuir no mínimo 1 caractere");
    }
    //--------------código build resumido--------
    const newBand = {
      id: id,
      name: name,
    };

    await db("bands").insert(newBand);

    res.status(200).send("Banda cadastrada com sucesso");
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
//------------Update Band------------------
app.put("/bands/:id", async (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id;

    const newId = req.body.id;
    const newName = req.body.name;

    if (newId !== undefined) {
      if (typeof newId !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }

      if (newId.length < 1) {
        res.status(400);
        throw new Error("'id' deve possuir no mínimo 1 caractere");
      }
    }

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        res.status(400);
        throw new Error("'name' deve ser string");
      }

      if (newName.length < 1) {
        res.status(400);
        throw new Error("'name' deve possuir no mínimo 1 caractere");
      }
    }

    // desestruturamos para encontrar o primeiro item do array

    const [band] = await db("bands").where({ id: idToEdit });

    if (band) {
      //----------forma redusida em build
      const updateBand = {
        id: newId || band.id,
        name: newName || band.name,
      };

      await db("bands").update(updateBand).where({ id: idToEdit });
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

//----------------------------post Song---------------------------------

app.post("/songs", async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const bandId = req.body.band_id;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' inválido, deve ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' inválido, deve ser string");
    }

    if (typeof bandId !== "string") {
      res.status(400);
      throw new Error("'bandId' inválido, deve ser string");
    }

    if (id.length < 1 || name.length < 1 || bandId.length < 1) {
      res.status(400);
      throw new Error(
        "'id', 'name' e 'bandId' devem possuir no mínimo 1 caractere"
      );
    }

    const newSong = {
      id: id,
      name: name,
      band_id: bandId,
    };
    await db("songs").insert(newSong);

    res.status(200).send("Música cadastrada com sucesso");
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

//-----------------------Update song---------------------------

app.put("/songs/:id", async (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id;

    const newId = req.body.id;
    const newName = req.body.name;
    const newBandId = req.body.bandId;

    if (newId !== undefined) {
      if (typeof newId !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }

      if (newId.length < 1) {
        res.status(400);
        throw new Error("'id' deve possuir no mínimo 1 caractere");
      }
    }

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        res.status(400);
        throw new Error("'name' deve ser string");
      }

      if (newName.length < 1) {
        res.status(400);
        throw new Error("'name' deve possuir no mínimo 1 caractere");
      }
    }

    if (newBandId !== undefined) {
      if (typeof newBandId !== "string") {
        res.status(400);
        throw new Error("'name' deve ser string");
      }

      if (newBandId.length < 1) {
        res.status(400);
        throw new Error("'name' deve possuir no mínimo 1 caractere");
      }
    }

    const [song] = await db("songs").where({ id: idToEdit });

    if (song) {
      const updateSong = {
        id: newId || song.id,
        name: newName || song.name,
        band_id: newBandId || song.band_id,
      };

      await db("songs").update(updateSong).where({ id: idToEdit });
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

//-----------------------Get Songs-------------------------------

app.get("/songs", async (req: Request, res: Response) => {
  try {
    const result = await db("songs")
      .select(
        "songs.id AS id",
        "songs.name AS name",
        "bands.id AS bandId",
        "bands.name AS bandName"
      )
      .innerJoin("bands", "songs.band_id", "=", "bands.id");
    // referencie o notion do material assíncrono "Mais práticas com query builder"
    // (Seções "Apelidando com ALIAS" e "Junções com JOIN")

    res.status(200).send(result);
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

//-----------implete delete Band---------------------

app.delete("/bands/:id", async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;
    const [band] = await db("bands").where({ id: idToDelete });

    if (!band) {
      res.status(400);
      throw new Error("'id' não encontrada");
    }
    await db("bands").del().where({ id: idToDelete });

    res.status(200).send("Banda deletada com sucesso!");
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

//----------delete song---------------------

app.delete("/songs/:id", async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;

    const [song] = await db("songs").where({ id: idToDelete });

    if (!song) {
      res.status(400);
      throw new Error("'id' não encontrada");
    }

    await db("songs").del().where({ id: idToDelete });

    res.status(200).send("Música deletada com sucesso!");
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
