export const DogEntry = ({currentDog}) => {
    return (
        <section className="dog-entry">
            <img className="dog-entry-img" src={currentDog.picUrl} alt="current dog"/>
            <h4 className="dog-entry-name">{currentDog.name}</h4>
            <button className="remove-button">Remove - </button>
        </section>
    )
}