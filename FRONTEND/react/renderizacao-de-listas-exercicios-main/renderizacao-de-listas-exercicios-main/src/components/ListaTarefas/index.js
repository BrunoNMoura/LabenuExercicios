import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  TarefaConcluida,
  H1,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaConcluida, setTarefaConcluida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = (e) => {
    e.preventDefault()
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    const tarefasCompletas = [...tarefaConcluida, tarefa]
    setTarefaConcluida(tarefasCompletas)
  };
  
  const apertarEnter = (e) => {
    if (e.key === "Enter") {
      adicionaTarefa();
      alert("Tarefa Incluida!")
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer onSubmit={adicionaTarefa} >
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={apertarEnter}
          required
        />
        <AddTaskButton type="submit" >Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainer>
        <H1>Tarefa Concluída</H1>
        <ul>
          {tarefaConcluida.map((tarefa, index) => {
            return (
              <TarefaConcluida key={index}>
                <p>{tarefa}</p>                               
              </TarefaConcluida>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
