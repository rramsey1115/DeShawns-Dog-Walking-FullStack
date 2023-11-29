import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDogById } from "../apiManager";

export const DogDetails = () => {
    const dogId = useParams().dogId;
    const [dog, setDog] = useState({});

    // get and set the current dog based on params
    const findAndSetCurrentDog = () => { getDogById(dogId).then(data => setDog(data)); }

    useEffect(() => {
        findAndSetCurrentDog();
    }, [dogId]);

    // if walker does not exist yet, use placeholder text, else use the walker's name
    let walkerName;
    if (dog.walker?.name == " ") {
        walkerName = "No One Assigned, yet!"
    }
    else {
        walkerName = dog.walker?.name;
    }

    // return required details about dog based on provided user stories
    return (<>
            <div className="dog-details-header">
                <h1>Details</h1>
            </div>
        <section className="dog-details">
            <div className="dog-details-left">
                <img className="dog-details-img" src={dog?.picUrl} alt="dog"/>
            </div>
            <div className="dog-details-right">
                <h2>{dog?.name}</h2>
                <h5>{dog?.city?.name}</h5>
                <p>{dog?.about}</p>
                <br></br>
                <h5>Walker:</h5>
                <p>{walkerName}</p>
            </div>
        </section>
    </>
    )
}