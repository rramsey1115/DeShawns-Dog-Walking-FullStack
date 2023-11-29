export const DogEntry = ({currentDog}) => {
    return (
        <section className="dog-entry">
            <h4 className="dog-entry-name">{currentDog.name}</h4>
            <h4 className="dog-entry-city">{}</h4>
        </section>
    )
}