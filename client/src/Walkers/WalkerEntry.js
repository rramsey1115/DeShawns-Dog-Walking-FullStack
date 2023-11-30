import { Link } from "react-router-dom"
import "./Walkers.css"

export const WalkerEntry = ({walkerObj}) => {

    return (
    <div className="walker-entry">
        <img className="walker-entry-img" src={walkerObj?.picUrl} alt="walker" />
        <Link to={`edit/${walkerObj.id}`}><h5 className="walker-entry-name">{walkerObj?.name}</h5></Link>
        <div className="cities-container">
            {walkerObj.cities?.map(city => {
                return <h5 key={city.id} className="walker-city-name">{city?.name}</h5>
            })}
        </div>
        <div className="buttons-container">
            <Link to={`${walkerObj.id}`}><button className="add-button">Assign Dog +</button></Link>
            <button className="remove-button">Remove Walker -</button>
        </div>
    </div>
    )
}