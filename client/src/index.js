import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Dogs/Home";
import { WalkersView } from "./Walkers/WalkersView";
import { CitiesView } from "./Cities/CitiesView";
import { DogDetails } from "./Dogs/DogDetails";
import { AssignDogView } from "./Walkers/AssignDogView";
import { EditWalker } from "./Forms/EditWalker";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/details">
          <Route path=":dogId" element={<DogDetails />}/>
        </Route>
      </Route>
      <Route path="/walkers" element={<App />}>
        <Route index element={<WalkersView />} />
        <Route path=":walkerId" element={<AssignDogView />} />
        <Route path="edit">
          <Route path=":walkerId" element={<EditWalker />} />
        </Route>
      </Route>
      <Route path="/cities" element={<App />}>
        <Route index element={<CitiesView />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);



reportWebVitals();
