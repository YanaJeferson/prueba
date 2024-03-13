import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Router, Form } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import TreeView from "./pages/TreeView";
import Calc from "./pages/Calc";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table/>}></Route>
          <Route path="/treeView" element={<TreeView/>}></Route>
          <Route path="/calc" element={<Calc/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
