import { useEffect, useState } from "react";
import { getAllDogs } from "../apiManager";
import { DogEntry } from "./DogEntry.js";

export default function Home() {
const [allDogs, setAllDogs] = useState([]);

const getAndSetAllDogs = () => {
  getAllDogs().then(data => setAllDogs(data));
};

useEffect(()=>{
  getAndSetAllDogs();
},[])

return (<>
  <section className="dogs">
    <div className="dogs-header">
      <h1 className="dogs-title">All Dogs</h1>
      <button className="add-button" id="add-dog-button">Add New Dog</button>
    </div>
    <div className="dogs-list">
      {allDogs?.map((dog) => {
        return (<DogEntry key={dog.id} currentDog={dog} />)
      })};
    </div>
  </section>
</>
)

}
