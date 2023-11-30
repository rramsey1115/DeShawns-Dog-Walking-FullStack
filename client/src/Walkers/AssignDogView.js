import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllDogs, getWalkerById } from "../apiManager";
import { AssignDogEntry } from "./AssignDogEntry";
import "./AssignDog.css"

export const AssignDogView = () => {
    const wId = useParams().walkerId * 1;
    const [walker, setWalker] = useState({});
    const [allDogs, setAllDogs] = useState([]);
    const [availableDogs, setAvailableDogs] = useState([]);

    const getAndSetWalkerById = () => {
        getWalkerById(wId).then(data => setWalker(data))
    };

    const getAndSetAllDogs = () => {
        getAllDogs().then(data => setAllDogs(data))
    };

    // filters allDogs for matching city AND not already assigned to the current walker
    const findAndSetAvailableDogs = () => {
        let res = [];
        walker.cities?.map(c => 
            {
                res = allDogs.filter(dog => dog.cityId == c.id && dog.walkerId === 0)
            })
        setAvailableDogs(res)
    };

    useEffect(()=>{
        getAndSetWalkerById();
    },[wId]);

    useEffect(()=>{
        getAndSetAllDogs();
    },[wId]);

    useEffect(()=> {
        findAndSetAvailableDogs();
    }, [wId, allDogs]);

    return (
    <section className="assign">
        <div className="assign-header">
            <h1 className="assign-title">Available Dogs for {walker.name}</h1>
        </div>
        <div className="assign-list">
            {/* if no available dogs, present a message, else show available dog entries */}
            {availableDogs.length === 0 
            ? <h4>No dogs currently available, please check back at another time!</h4> 
            : availableDogs.map(aDog => {return <AssignDogEntry key={aDog.id} aDog={aDog} currentWalker={walker}/>})}
        </div>
    </section>
    );
};