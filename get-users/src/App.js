import React, { useState } from "react";
import "./App.css";
// import Navbarr from "./components/Navbarr.js";
// import API from "./components/API.js";
// import CallAPI from "./components/CallAPI.js";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };
  return (
    <>
      {/* <Navbarr /> */}
      <>VARIYA GARMENT</>
      <br></br>
      <br></br>
      <button onClick={loadUsers}>Get Users</button>
      <br></br>
      {/* <CallAPI /> */}
      {/* <>Data is fetched by api</> */}
      <ul>
        {users.map(({ id, login, url }) => (
          <li key={id}>
            ID: {id} <br></br>
            Username : {login} <br></br>
            Website : {url} <br></br>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
