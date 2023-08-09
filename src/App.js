import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    if (response) {
      setUsers(response.data.data);
    }
  };

  return (
    <div className="App">
      {users.length &&
        users.map((user, index) => (
          <div key={index}>
            <h1>Username: {user.name}</h1>
            <h3></h3>
          </div>
        ))}
    </div>
  );
}

export default App;
