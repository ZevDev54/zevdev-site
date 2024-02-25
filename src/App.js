import "./index.css"
import React from "react";
import { ReactDOM } from "react";



import Landing from './components/Landing';
import Games from "./components/Games";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";



function App() {
  return (
    <main>
    <link rel="icon" href="./images/logo/ZDLogoNoBackground.png" />


      <BrowserRouter>
        <div>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/games" element={<Games/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

export default App;
