import "./index.scss"
import React from "react";




import Landing from './components/Landing';
import Games from "./components/Games";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import GamePage from "./components/GamePage";



function App() {
  return (
    <main>
      <div className="content">
        <link rel="icon" href="./images/logo/ZDLogoNoBackground.png" />


        <BrowserRouter>
          <div>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/games" element={<Games />} />
              <Route path="/lunarcheeseminingsim" element={<GamePage />} />
              {/* add a for loop which loops thru the games in the gaem list json file. 
            Add routes for each game, and setup a game page 
            which takes in the game's json info as props.
           */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </main>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

export default App;
