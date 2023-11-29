import { useEffect, useState } from "react"
import { WalkerEntry } from "./WalkerEntry";
import { getAllCities, getAllWalkers } from "../apiManager";
import "./Walkers.css"

export const WalkersView = () => {
    const [allWalkers, setAllWalkers] = useState([]);
    const [filteredWalkers, setFilteredWalkers] = useState([]);
    const [filterInput, setFilterInput] = useState("");
    const [allCities, setAllCities] = useState([]);

    const getAndSetAllWalkers = () => {
        getAllWalkers().then(data => setAllWalkers(data))
    };

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data));
    };

    const filterWalkers = () => {
   
    };

    useEffect(()=>{
        getAndSetAllWalkers();
    },[]);

    useEffect(()=>{
        getAndSetAllCities();
    },[]);

    return (
        <section className="walkers">
            <div className="walkers-header">
                <div className="walkers-header-left">
                    <h1>Walkers</h1>
                </div>
                <div className="walkers-header-right">
                    <label>Filter by City: {"   "}
                        <select className="walkers-dropdown">
                            <option value="0">All</option>
                            {allCities?.map(city => {
                                return <option key={city.id} value={city.id}>{city.name}</option>
                            })}
                        </select>
                    </label>
                </div>
            </div>
            <section className="walkers-list">
                {allWalkers.map(w => {
                    return ( <WalkerEntry key={w.id} walkerObj={w} /> )
                })}
            </section>
        </section>
    )
}