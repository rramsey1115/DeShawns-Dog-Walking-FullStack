import { Link } from "react-router-dom"
import { RemoveDogById } from "../apiManager"

export const DogEntry = ({currentDog, getAndSetAllDogs}) => {

    const handleRemove = () => {
        RemoveDogById(currentDog.id).then(getAndSetAllDogs)
    }

    return (
        <section className="dog-entry">
            <div className="dog-entry-left">
            <img className="dog-entry-img" src={currentDog.picUrl} alt="current dog"/>
            <Link to={`/details/${currentDog.id}`}><h4 className="dog-entry-name">{currentDog.name}</h4></Link>
            </div>
            <button 
                className="remove-button"
                onClick={handleRemove}>Remove - </button>
        </section>
    )
}