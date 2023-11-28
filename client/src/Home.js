import { useEffect, useState } from "react";
import { getAllDogs } from "./apiManager";

export default function Home() {
const [allDogs, setAllDogs] = useState([]);

const getAndSetAllDogs = () => {
  setAllDogs(getAllDogs());
};

useEffect(()=>{
  getAndSetAllDogs();
},[])

return (<>
  <h1>All Dogs</h1>
</>
)

}
