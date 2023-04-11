import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);

    const guardaNome = () => {
        localStorage.setItem("nomeUsuario", nome);
        alert("Usuário Salvo")
        setNome("")
    }



    const pegarNome = () => {
        const nomeSalvo = localStorage.getItem("nomeUsuario");
        if (nomeSalvo) {
            setNome(nomeSalvo)
            alert("Usuário Acessado")
        }
    }

    useEffect(() => {
        pegarNome()
    }, [])

    const tarefaSalva = () => {
        setListaTarefa([...listaTarefa, tarefa]);
        setTarefa("");
    }

    const salvarTarefa = () => {
        const listaTarefaString = JSON.stringify(listaTarefa)
        return localStorage.setItem("tarefa", listaTarefaString)
    }

    const carregarTarefa = () => {        
        const tarefaArray = localStorage.getItem("tarefa")
        if (tarefaArray) {
            const carregarArray = JSON.parse(tarefaArray)
            setListaTarefa(carregarArray)
            alert("tarefa acessada!")
        }
    }
    useEffect(() => {
        carregarTarefa()
    }, [])
    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                />
            </label>
            <div>
                <button onClick={guardaNome}>Guardar Dados</button>
                {/* <button onClick={pegarNome}>Acessar Dados</button>  */}
            </div>
            <br />
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={(e) => { setTarefa(e.target.value) }}
                />
            </label>
            <button type="button" onClick={tarefaSalva}>adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task, indice) => {
                    return <li key={indice}>{task}</li>;
                })}
            </ul>
            <div>
                <button onClick={salvarTarefa} >Guardar tarefa</button>
                <button onClick={carregarTarefa}>Acessar tarefa</button>
            </div>
        </Form>
    );
}