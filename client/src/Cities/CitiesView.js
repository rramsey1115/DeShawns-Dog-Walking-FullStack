import { useEffect, useState } from "react"
import "./Cities.css"
import { AddCity, getAllCities } from "../apiManager";

export const CitiesView = () => {
    const [cities, setCities] = useState([]);
    const [userInput, setUserInput] = useState("");

    const getAndSetCities = () => { getAllCities().then(data => setCities(data)) }

    useEffect(() => {
        getAndSetCities();
        console.log("cities", cities)},
        []);

    const handleCityAdd = () => {
        AddCity(userInput).then(getAndSetCities).then(setUserInput(""));
    }

    return (
        <section className="cities">
            <div className="cities-header">
                <div className="cities-header-left"><h1>DeShawn's Current Cities</h1></div>
                <div className="cities-header-right">
                    <input type="text"
                        value={userInput}
                        placeholder={`New City Name`}
                        className="cities-header-input"
                        onChange={(event) => {
                            let copy = event.target.value;
                            setUserInput(copy);
                    }} />
                </div>
                <button className="add-button" 
                    id="cities-add-button"
                    onClick={(e) => handleCityAdd()}
                    >Add City +</button>
            </div>
            <div className="cities-list">
                {cities.map(city => {
                    return(<div key={city?.id} className="cities-list-entry"><h4>{city?.name}</h4></div>)
                })}
            </div>
        </section>
    )
}