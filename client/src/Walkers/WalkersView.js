import { useEffect, useState } from "react"
import { WalkerEntry } from "./WalkerEntry";
import { getAllWalkers, getWalkerCity } from "../apiManager";

export const WalkersView = () => {
    const [allWalkers, setAllWalkers] = useState([]);
    const [filteredWalkers, setFilteredWalkers] = useState([]);
    const [filterInput, setFilterInput] = useState("");

    const getAndSetAllWalkers = () => {
        getAllWalkers().then(data => setAllWalkers(data))
    }

    const filterWalkers = () => {
        const result = allWalkers.filter(walker => walker.city?.name === filterInput)
        setFilteredWalkers(result)
    }

    useEffect(()=>{
        getAndSetAllWalkers();
    },[])

    console.log('allWalkers', allWalkers);

    return (
        <section className="walkers">
            <div className="walkers-header">
                <div className="walkers-header-left">
                    <h1>Walkers</h1>
                </div>
                <div className="walkers-header-right">
                    <select>Filter By City</select>
                </div>
                <section className="walkers-list">
                    {allWalkers.map(w => {
                        return ( <WalkerEntry key={w?.id} walker={w} /> )
                    })}
                </section>
            </div>
        </section>
    )
}