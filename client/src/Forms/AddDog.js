import { useEffect, useState } from "react"
import "./AddDog.css"
import { CreateNewDog, getAllCities, getAllDogs } from "../apiManager";
import { useNavigate } from "react-router-dom";

export const AddDog = () => {
    const [allCities, setAllCities] = useState([]);
    const [allDogs, setAllDogs] = useState([]);
    const [newDogObj, setNewDogObj] = useState({
        id: allDogs?.length + 1,
        name: "",
        about: "",
        picUrl: "",
        cityId: 0,
    });

    const getAndSetAllDogs = () => {
        getAllDogs().then(data => setAllDogs(data));
    }

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data))
    };

    useEffect(()=> {
        getAndSetAllCities();
    }, []);

    useEffect(() => {
        getAndSetAllDogs();
    }, [])

    const navigate = useNavigate();

    const handleAddDog = async () => {
        await CreateNewDog(newDogObj);
        console.log('addedNewDog:', newDogObj);
        navigate(`/details/${newDogObj.id}`);
    }

    useEffect(() => {
        newDogObj.id = allDogs.length + 1;
    }, [allDogs, newDogObj])

    return (
    <section className="addD">
        <div className="addD-header">
            <h1>Add A New Dog</h1>
        </div>
        <form className="addD-form">
            <fieldset className="addD-form-item">
                <input 
                    required
                    className="addD-form-input" 
                    id="name" 
                    placeholder="Name"
                    onChange={(event) => {
                        const copy = { ...newDogObj };
                        copy.name = event.target.value;
                        setNewDogObj(copy);
                      }}/>
            </fieldset>
            <fieldset className="addD-form-item">
                <input 
                    required
                    className="addD-form-input" 
                    id="pic" 
                    placeholder="Picture URL"
                    onChange={(event) => {
                        const copy = { ...newDogObj };
                        copy.picUrl = event.target.value;
                        setNewDogObj(copy);
                      }}/>
            </fieldset>
            <fieldset className="addD-form-item">
                <textarea 
                    required
                    className="addD-form-textarea" 
                    id="about" 
                    placeholder="About"
                    onChange={(event) => {
                        const copy = { ...newDogObj };
                        copy.about = event.target.value;
                        setNewDogObj(copy);
                      }}/>
            </fieldset>
            <fieldset className="addD-form-item">
                <select 
                    required
                    className="addD-form-dropdown"
                    onChange={(event) => {
                        const copy = { ...newDogObj };
                        copy.cityId = event.target.value;
                        setNewDogObj(copy);
                      }}>
                    <option value={0}>Choose City</option>
                    {allCities.map(city => {
                        return <option key={city.id} value={city.id}>{city.name}</option>
                    })}
                </select>
            </fieldset>
            <fieldset>
                <button className="add-button" 
                    type="button"
                    onClick={handleAddDog}
                    >Add Dog +
                </button>
            </fieldset>
        </form>
    </section>
    )
}