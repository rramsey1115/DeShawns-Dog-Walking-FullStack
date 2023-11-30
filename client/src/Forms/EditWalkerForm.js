
import { useEffect, useState } from "react"
import { getAllCities } from "../apiManager"
import "./EditWalker.css"

export const EditWalkerForm = ({walker}) => {
    const [allCities, setAllCities] = useState([]);
    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data));
    }  
    useEffect(()=>{
        getAndSetAllCities();
    },[walker])

    return (
    <form className="walker-edit-form">
        <div className="form-div">
            <label>Name: {" "}
                <input className="walker-edit-name" type="text" name="name"/>
            </label>
        </div>
        <div className="form-div">
            <label>About: {" "}
                <input className="walker-edit-about" type="text" name="about"/>
            </label>
        </div>
        <div className="form-div">
            <label>Picture URL: {" "}
                <input className="walker-edit-pic" type="text" name="pic"/>
            </label>
        </div>
        {/* defaultChecks boxes which match the walker's cities */}
        {allCities.map(city => {
            let match = false;
            walker.cities?.map(wc => {
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