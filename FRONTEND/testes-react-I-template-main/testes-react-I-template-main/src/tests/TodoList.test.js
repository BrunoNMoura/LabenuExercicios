import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import  userEvent  from "@testing-library/user-event";

describe("Testando TodoList", () => {
  //it() mesmo que test
  test("Deve renderizar com o titulo", () => {
    render(<TodoList />);
    const title = screen.getByText(/Todo List/i);
    expect(title).toBeInTheDocument();
  });
  test("O input deve iniciar vazio", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter a todo");
    expect(input).toHaveValue("");
  });
  test("Deve atualizar o valor do input ao digitar nele", async () => {
    const user = userEvent.setup()
    render(<TodoList/>);
    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha")
    expect(input).toHaveValue("bananinha");
  });
  test("Deve renderizar uma nova tarefa ao apertar enter", async () => {
    const user = userEvent.setup()
    render(<TodoList/>);
    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha{enter}")
    const result = screen.getByText("bananinha")
    expect(result).toBeInTheDocument()
    screen.logTestingPlaygroundURL()
  });
  test("Deve alterar o status da tarefa quando o botão de alterar status for clicado", async () => {
    const user = userEvent.setup()
    render(<TodoList/>);
    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha{enter}")
    const todoItem = screen.getByText("bananinha")

    const buttonToggle = screen.getByRole('button', {
        name: /toggle/i
    })
    await user.click(buttonToggle)
    expect(todoItem).toHaveStyle("text-decoration: line-through")
    await user.click(buttonToggle)
    expect(todoItem).toHaveStyle("text-decoration:none")
    screen.logTestingPlaygroundURL()
  });
  test("Deve deletar uma tarefa ao clicar no botão delete", async () => {
    const user = userEvent.setup()
    render(<TodoList/>);
    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha{enter}")
    const todoItem =screen.getByText("bananinha")

    const buttonDelete = screen.getByRole('button', {
      name: /delete/i
  })

  await user.click(buttonDelete)
  expect(todoItem).not.toBeInTheDocument()
    screen.logTestingPlaygroundURL()
  });
});
