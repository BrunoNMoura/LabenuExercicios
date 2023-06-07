import express, { Request, Response } from "express";
import cors from "cors";
import { courses, students } from "./database";
import { TCourse, TStudents } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/", (req: Request, res: Response) => {
  res.send("API rodando!");
});
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

//pegar todos os cursos:

app.get("/courses", (req: Request, res: Response) => {
  res.status(200).send(courses);
});

//pegar por name (query parms)

app.get("/courses/search", (req: Request, res: Response) => {
  const q = req.query.q as string;

  const result = courses.filter((course) => {
    return course.name.toLowerCase().includes(q.toLowerCase());
  });

  res.status(200).send(result);
});

//post criando um novo curso

app.post("/courses", (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const lessons = req.body.lessons;
  const stack = req.body.stack;

  const newCourse: TCourse = {
    id,
    name,
    lessons,
    stack,
  };
  courses.push(newCourse);

  res.status(201).send("cadastro de curso realizado com sucesso!");
});

//fixação

//pegar todos os estudantes

app.get("/students", (req: Request, res: Response) => {
  res.status(200).send(students);
});

//filtrar estudante

app.get("/students/search", (req: Request, res: Response) => {
  const q = req.query.q as string;

  const result = students.filter((student) => {
    return student.name.toLowerCase().includes(q.toLowerCase());
  });

  res.status(200).send(result);
});

//criar novo estudante

app.post("/students", (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;

  const newStudent: TStudents = {
    id,
    name,
    age
  };
  students.push(newStudent);

  res.status(201).send("cadastro de estudante realizado com sucesso!");
});
