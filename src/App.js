import "./index.scss"
import React from "react";




import Landing from './components/Landing';
import Games from "./components/Games";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import GamePage from "./components/GamePage";
import games from "./games/games.json"


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
              <Route path="/art" element={<Games />} />
              {
                games.map( (curGame) => {
                  return(
                    <Route path={"/"+curGame.pageslug} element={<GamePage game={curGame}/>}></Route>
                  )
                })
              }
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
