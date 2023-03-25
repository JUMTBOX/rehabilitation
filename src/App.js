import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";

const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = res.data;
  // console.log(JSON.stringify(data[0].name));
  return JSON.stringify(data);
};

function App() {
  let [user, setUser] = useState("yang");

  return (
    <div className="App">
      <header className="App-header">
        <form action="post">
          <input
            type="text"
            name="username"
            placeholder="insert username"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="insert password"
          ></input>
          <button type="submit">JOIN</button>
        </form>
      </header>
      <div></div>
    </div>
  );
}

export default App;
