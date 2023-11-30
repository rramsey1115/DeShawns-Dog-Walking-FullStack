
import { useEffect, useState } from "react"
import { getAllCities } from "../apiManager"
import "./EditWalker.css"

export const EditWalkerForm = ({ walker }) => {
    const [allCities, setAllCities] = useState([]);
    const [walkerCities, setWalkerCities] = useState([]);
    const [updatedWalker, setUpdatedWalker] = useState({
        id: walker.id,
        name: walker.name,
        about: walker.about,
        picUrl:walker.picUrl,
        cities: walker.cities
    });

    const findAndSetWalkerCities = () => {
        let res = [];
        walker.cities?.map(wc => res.push(wc));
        setWalkerCities(res);
    }

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data));
    }  

    useEffect(()=>{
        findAndSetWalkerCities();
    },[walker, updatedWalker]);

    useEffect(()=>{
        getAndSetAllCities();
    },[walker])

    useEffect(()=>{
        setUpdatedWalker(walker);
    },[walker])

    return (
    <form className="walker-edit-form">
        <div className="form-div">
            <label>Name: {" "}
                <input className="walker-edit-name" type="text" defaultValue={walker?.name}/>
            </label>
        </div>
        <div className="form-div">
            <label>Picture URL: {" "}
                <input className="walker-edit-pic" type="text" defaultValue={walker?.picUrl}/>
            </label>
        </div>
        <div className="form-div">
            <label>About: {" "}
                <textarea className="walker-edit-about" type="text" defaultValue={walker?.about}/>
            </label>
        </div>

        {/* defaultChecks boxes which match the walker's cities */}
        {allCities.map(city => {
            let match = false;
            walkerCities?.map(wc => {
                if (city.id === wc.id) 
                {
                   match = true;
                }
            })
            return (match === false 
                ? <div className="form-div" key={city.id}>
                    <label>
                        <input type="checkbox" value={city.id}/>{city.name}
                    </label>
                </div>
                : <div className="form-div" key={city.id}>
                    <label>
                        <input type="checkbox" defaultChecked value={city.id}/>{city.name}
                    </label>
                </div>
            )
        })}
    </form>)
}



/* This is may be a shorter way of doing things, but doesn't work YET...
{allCities.map(city => {
            let match = false;
            walker.cities?.map(wc => {
                if (city.id === wc.id) 
                {
                   match = true;
                }
            })
            return (
            <div className="form-div" key={city.id}>
                <label>
                    <input type="checkbox" defaultChecked={match===true ? true : false} value={city.id}/>{city.name}
                </label>
            </div>
            )
        })} */