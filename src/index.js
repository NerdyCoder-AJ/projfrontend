import React from 'react';
import { render } from "react-dom";
import {BrowserRouter, Routes, Route,  Link} from "react-router-dom"
import Home from './core/Home';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
