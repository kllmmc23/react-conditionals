import React from "react";
import Login from "./Login";

var isLoggein = false;

export default function App() {
  return (
    <div className="container">{isLoggein ? <h1>Hello</h1> : <Login />}</div>
  );
}
