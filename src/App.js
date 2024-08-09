import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storageTasks = localStorage.getItem("@tasks");
    return storageTasks ? JSON.parse(storageTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleFormRegister(event) {
    event.preventDefault();

    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  }

  return (
    <div>
      <h1>Cadastro de tarefas</h1>

      <form onSubmit={handleFormRegister}>
        <TextField
          label="Digite uma tarefa..."
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <br />
        <br />

        <Button size="small" variant="contained" type="submit">
          Cadastrar Tarefa
        </Button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
