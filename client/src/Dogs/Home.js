import { useEffect, useState } from "react";
import { getAllDogs } from "../apiManager";
import { DogEntry } from "./DogEntry.js";
import "./Dogs.css"
import { Link } from "react-router-dom";

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
      <h1 className="dogs-title">Dogs</h1>
      <Link to={'/addDog'}><button className="add-button">Add New Dog</button></Link>
    </div>
    <div className="dogs-list">
      {allDogs?.map((dog) => {
        return (<DogEntry key={dog.id} currentDog={dog} getAndSetAllDogs={getAndSetAllDogs}/>)
      })}
    </div>
  </section>
</>
)

}
