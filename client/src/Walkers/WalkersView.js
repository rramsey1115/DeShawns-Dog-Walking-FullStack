import { useEffect, useState } from "react"
import { WalkerEntry } from "./WalkerEntry";
import { getAllCities, getAllWalkers } from "../apiManager";
import "./Walkers.css"

export const WalkersView = () => {
    const [allWalkers, setAllWalkers] = useState([]);
    const [filteredWalkers, setFilteredWalkers] = useState([]);
    const [filterInput, setFilterInput] = useState(0);
    const [allCities, setAllCities] = useState([]);

    const getAndSetAllWalkers = () => {
        getAllWalkers().then(data => setAllWalkers(data))
    };

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data));
    };

    const handleCityChange = (cityId) => {
        setFilterInput(cityId * 1)
    };

    useEffect(()=>{
        getAndSetAllWalkers();
    },[]);

    useEffect(()=>{
        getAndSetAllCities();
    },[]);

    // checks dropdown input against user Cities arr - only shows users with at least one matching city
    useEffect(()=>{
        const result = []
        for (const walker of allWalkers) {
            for (const wc of walker.cities) {
                if (wc.id === filterInput)
                {
                    result.push(walker)
                }
            }
        }
        setFilteredWalkers(result);
    },[filterInput, allWalkers]);

    return (
        <section className="walkers">
            <div className="walkers-header">
                <div className="walkers-header-left">
                    <h1>Walkers</h1>
                </div>
                <div className="walkers-header-right">
                    <label>Filter by City: {"   "}
                        <select className="walkers-dropdown"
                            onChange={e => handleCityChange(e.target.value)}>
                            <option value={0}>All</option>
                            {allCities?.map(city => {
                                return <option key={city.id} value={city.id}>{city.name}</option>
                            })}
                        </select>
                    </label>
                </div>
            </div>
            <section className="walkers-list">
                {/* if filter has been applied, use filteredWalkers, else use allWalkers */}
                {filteredWalkers.length > 0 ? filteredWalkers.map(w => {
                    return ( <WalkerEntry key={w.id} walkerObj={w} /> )
                }) : allWalkers.map(w => {
                    return ( <WalkerEntry key={w.id} walkerObj={w} /> )
                })
            }
            </section>
        </section>
    )
}