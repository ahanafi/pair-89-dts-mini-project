import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import Login from './Components/Auth/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap';
import React, { useEffect, useState } from "react";
import Myloader from "react-spinners/ClipLoader";
import mySvg from "./Images/hbo-max.svg";

function App() {
  const [spinner, setSpinner] = useState(true);

  // eslint-disable-next-line
  let [color, setColor] = useState("grey");

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);
  }, []);
  return (
    <>
      {!spinner ? (
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/*" element={<MainRoutes />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="load_app" style={{ height: "400px" }}>
          <Myloader
            color={color}
            size={80}
            className="m__load"
            speedMultiplier={1.5}
          />
          <img src={mySvg} alt="" width="300" className="logo2 pt-4" />{" "}
        </div>
      )}
    </>
  );
}

export default App;