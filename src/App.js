import { useState } from "react";

// import ShowName from "./components/ShowName";

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  const [users, setUsers] = useState([])

  function handleFormSubmit(event) {
    event.preventDefault()

    const data = {
      nome: name,
      idade: age,
      email: email
    }

    const teste = [...users, data]



    setUsers(teste)

    setName("")
    setAge("")
    setEmail("")
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Nome:</label>
        <input placeholder="Digite seu nome aqui..." value={name} onChange={(e) => setName(e.target.value)} /> <br />

        <label>Idade:</label>
        <input placeholder="Digite sua idade aqui..." value={age} onChange={(e) => setAge(e.target.value)} /> <br />

        <label>Email:</label>
        <input placeholder="Digite seu email aqui..." value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

        <button type="submit" >Registrar</button>
      </form>

      <br />
      <br />

      {users.map((item, index) => (
        <div key={index}>
          <span>Nome: {item.nome}</span> <br/>
          <span>Idade: {item.idade}</span> <br/>
          <span>Email: {item.email}</span> <br/>
          <span>------------------------------------------------</span>
        </div>
      ))}
    </div>
  );
}

export default App;