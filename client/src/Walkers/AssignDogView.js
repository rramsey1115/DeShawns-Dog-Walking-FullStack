import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWalkerById } from "../apiManager";

export const AssignDogView = () => {
    const wId = useParams().walkerId * 1;
    const [walker, setWalker] = useState({});

    const getAndSetWalkerById = () => {
        getWalkerById(wId).then(data => setWalker(data))
    };

    useEffect(()=>{
        getAndSetWalkerById();
    },[wId]);

    return (<h1>Available Dogs to Assign to {walker.name}</h1>);
};