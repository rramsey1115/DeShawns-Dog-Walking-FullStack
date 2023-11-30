import { useNavigate } from "react-router-dom";
import "./AssignDog.css"
import { useState } from "react";
import { AssignDogToWalker } from "../apiManager";

export const AssignDogEntry = ({aDog, currentWalker}) => {

    const navigate = useNavigate();

    const handleDogAssign = async () => {
        // assign dog to current walker using Program.cs
        aDog.walkerId = currentWalker.id;
        await AssignDogToWalker(aDog.id, aDog);

        // navigate to dog details for this dog
        navigate(`/details/${aDog.id}`)

        // just to confirm values while building
        console.log(`assigned ${aDog.name} to ${currentWalker.name}`);
    }

    return (
        <section className="aDog">
            <div className="aDog-left">
                <img src={aDog?.picUrl} alt="doggo" className="aDog-img" />
                <h4 onClick={handleDogAssign}>{aDog?.name}</h4>
            </div>
            <div className="aDog-right">
                <h4>{aDog.city?.name}</h4>
            </div>
        </section>
    )
}