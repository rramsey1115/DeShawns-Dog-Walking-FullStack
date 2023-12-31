import { Link, useNavigate } from "react-router-dom";
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
    }

    return (
        <section className="aDog">
            <div className="aDog-left">
                <img src={aDog?.picUrl} alt="doggo" className="aDog-img" />
                <Link><h4 onClick={handleDogAssign} className="aDog-name">{aDog?.name}</h4></Link>
            </div>
            <div className="aDog-right">
                <h4 className="aDog-city">{aDog.city?.name}</h4>
            </div>
        </section>
    )
}