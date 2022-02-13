import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./router";

const App = () =>{
  return (
    <div>
      <Router/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
