import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home  from "./pages/Home";
import Indonesia  from "./pages/Indonesia";
import Covid19 from "./pages/Covid19";
import Programming from "./pages/Programming";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/indonesia" element={<Indonesia/>} />
        <Route path="/programming" element={<Programming/>} />
        <Route path="/covid19" element={<Covid19/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
