import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Compoment/Login";
import Register from "./Compoment/Register";
import { BrowserRouter } from "react-router-dom";
import Homne from "./Compoment/Home";
import Create from "./Compoment/Create";
import Update from "./Compoment/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homne />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
