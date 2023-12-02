import { useParams } from "react-router-dom"
import { getWalkerById } from "../apiManager";
import { useEffect, useState } from "react";
import { EditWalkerForm } from "./EditWalkerForm";
import "./EditWalker.css"

export const EditWalker = () => {
    const wId = useParams().walkerId * 1;
    const [walker, setWalker] = useState({});

    const getAndSetWalker = () => {
        getWalkerById(wId).then(data => setWalker(data));
    }

    useEffect(() => {
        getAndSetWalker();
    }, [wId])


    if(!walker.id)
    {
        return null;
    }
    else 
    {
        return ( 
            <section className="edit">
                <div className="edit-header">
                    <h1>Edit {walker.name}'s Info</h1>
                </div>
                <div className="form-container">
                    <EditWalkerForm walker={walker} /> 
                </div>
            </section>
         )
    }
}