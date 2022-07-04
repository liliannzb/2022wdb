import React from "react";
import Login from "./login";

let isLogin = false;

function renderConditionally() {
  if (isLogin) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return (
    <div className="container">{isLogin ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
