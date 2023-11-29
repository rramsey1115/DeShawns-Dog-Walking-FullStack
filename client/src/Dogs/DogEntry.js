import { Link } from "react-router-dom"

export const DogEntry = ({currentDog}) => {
    return (
        <section className="dog-entry">
            <div className="dog-entry-left">
            <img className="dog-entry-img" src={currentDog.picUrl} alt="current dog"/>
            <Link to={`/details/${currentDog.id}`}><h4 className="dog-entry-name">{currentDog.name}</h4></Link>
            </div>
            <button className="remove-button">Remove - </button>
        </section>
    )
}