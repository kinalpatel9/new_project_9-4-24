import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_page from "./assets/components/without_api/home";
import Page_one from "./assets/components/without_api/page_one";


function App() {
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home_page/>}></Route>
        <Route path="page_one" element={< Page_one/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
