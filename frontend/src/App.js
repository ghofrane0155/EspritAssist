import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your views
import Home from "./views/Home/home";

// Import the MainLayout
import MainLayout from "./layouts/Main/MainLayout";
import Notfound from "./views/NotFound/notfound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/About" element={<About />} />
            <Route path="/Mobility" element={<Mobility />} />
            <Route path="/Employability" element={<Employability />} />
            <Route path="/Contact" element={<Contact />} />             */}
            <Route path="*" element={<Notfound />} /> 
            
          </Routes>
        </MainLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
