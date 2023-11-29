import { useEffect, useState } from "react"
import { getWalkerCity } from "../apiManager";

export const WalkerEntry = ({walkerObj}) => {
    const [walkerCities, setWalkerCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    const getAndSetWCities = () => {
        getWalkerCity().then(data => setWalkerCities(data))
    }

    useEffect(()=> {
        getAndSetWCities();
    }, [walkerObj]);

    const filterWCities = () => {
        const result = walkerCities?.filter(wc => wc?.walkerId === walkerObj?.id)
        setFilteredCities(result);
    }

    useEffect(()=> {
        filterWCities();
    }, [walkerCities, walkerObj]);

    return (
    <div className="walker-entry">
        <img className="walker-entry-img" src={walkerObj?.picUrl} alt="walker" />
        <h4 className="walker-entry-name">{walkerObj?.name}</h4>
        {filteredCities.map(fcity => {
            return <h4 className="walker-city-name">{fcity.city?.name}</h4>
        })}
        <button className="add-button">Assign Dog +</button>
        <button className="remove-button">Remove Walker -</button>
    </div>
    )
}