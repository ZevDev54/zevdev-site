import "./index.scss"
import React from "react";




import Landing from './components/Landing';
import Games from "./components/Games";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import GamePage from "./components/GamePage";
import games from "./games/games.json"
import Design from "./components/Design";
import ArtPage from "./components/ArtPage";


import FooterContent from "./components/FooterContent";
import PhysicalProjectPage from "./components/PhysicalProjectPage";
import Photography from "./components/Photography";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <div className="mainAndFooterWrapper">
        <main>
          <div className="content">
            <link rel="icon" href="./images/logo/FrogOnlyLime@2x.png" />


            <BrowserRouter>
              <div>
                <Navbar></Navbar>
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/games" element={<Games />} />
                  <Route path="/art" element={<ArtPage />} />
                  <Route path="/design" element={<Design />} />
                  <Route path="/physical-projects" element={<PhysicalProjectPage />} />
                  <Route path="/contact" element={<ContactPage />} />


                  <Route path="/mr-synth" element={<PhysicalProjectPage />} />
                  {/* <Route path="/photography" element={<Photography />} /> */}

                  {/* <Route path="/mr-synth" element={<PhysicalProjectPage />} /> */}


                  {
                    games.map((curGame) => {
                      return (
                        <Route path={"/" + curGame.pageslug} element={<GamePage game={curGame} />}></Route>
                      )
                    })
                  }
                </Routes>
              </div>
            </BrowserRouter>
          </div>

        </main>
        <div>
            <FooterContent></FooterContent>
          </div>
      </div>

    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

export default App;
