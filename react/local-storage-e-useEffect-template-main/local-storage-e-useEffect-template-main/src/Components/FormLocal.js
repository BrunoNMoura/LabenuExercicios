import React, { useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);

   const setDataName =()=>{
    localStorage.setItem("nomeUsuario", nome);
    alert("Usuário Salvo")
   }

   const getDataName = ()=>{
    const texto = localStorage.getItem("nomeUsuario");
    setNome(texto)
    alert("Usuário Acessado")
   }

   const tarefaSalva = (e)=>{
    setListaTarefa([ ...listaTarefa, tarefa]);
    setTarefa("");
   }

   const saveTaks = ()=>{
    const listaTarefaString = JSON.stringify(listaTarefa)
    localStorage.setItem("tarefa", listaTarefaString)
   }

   const loadTask = ()=> {        setListaTarefa(JSON.parse(localStorage.getItem("tarefa")))
   }

    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input 
                name="nome" 
                id="nome"
                value={nome}
                onChange={(e)=>{setNome(e.target.value)}} 
                />
            </label>
            <div>
                <button onClick={setDataName}>Guardar Dados</button>
                <button onClick={getDataName}>Acessar Dados</button>
            </div>
            <br />
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input 
                name="tarefa" 
                id="tarefa" 
                value={tarefa}
                onChange={(e)=>{setTarefa(e.target.value)}}
                />
            </label>
            <button type="button" onClick={tarefaSalva}>adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
            <div>
                <button onClick={saveTaks} >Guardar tarefa</button>
                <button onClick={loadTask}>Acessar tarefa</button>
            </div>
        </Form>
    );
}