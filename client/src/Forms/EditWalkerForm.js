
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
        cities: walkerCities
    });

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data))
    };

    useEffect(()=> {
        getAndSetAllCities()
    }, [walker]);

    useEffect(()=> {
        setUpdatedWalker(walker)
    }, [walker]);

    useEffect(()=> {
        setWalkerCities(walker.cities)
    }, [walker, updatedWalker]);


    const handleCheckChange = (id) => {
        console.log("changeId", id)
        console.log('walkerCities', walkerCities);

        // finds if changed box id exists in walkerCities
        const resultArr = walkerCities.filter(wc => wc.id == id)

        // if array contains city already, delete the city from walkerCities
        if (resultArr.length > 0)
        {  
            const newArr = walkerCities.filter(wc => wc.id != id)
            setWalkerCities(newArr)
        }
        // if array is empty, add the newly checked city
        else if (resultArr.length === 0)
        {   
            const newCity = allCities.filter(city => city.id == id)
            walkerCities.push(newCity[0]);
        }

        console.log('walkerCities', walkerCities);
    }
    



    return (
    <form className="walker-edit-form">
        <div className="form-div">
            <label>Name: {" "}
                <input required 
                onChange={(event) => {
                    const copy = { ...updatedWalker };
                    copy.name = event.target.value;
                    setUpdatedWalker(copy);
                  }}
                className="walker-edit-name" 
                type="text" 
                defaultValue={walker?.name}/>
            </label>
        </div>
        <div className="form-div">
            <label>Picture URL: {" "}
                <input required 
                onChange={(event) => {
                    const copy = { ...updatedWalker };
                    copy.picUrl = event.target.value;
                    setUpdatedWalker(copy);
                  }}
                className="walker-edit-pic" 
                type="text" 
                defaultValue={walker?.picUrl}/>
            </label>
        </div>
        <div className="form-div">
            <label>About: {" "}
                <textarea required 
                onChange={(event) => {
                    const copy = { ...updatedWalker };
                    copy.about = event.target.value;
                    setUpdatedWalker(copy);
                  }}
                className="walker-edit-about" 
                type="text" 
                defaultValue={walker?.about}/>
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
                        <input
                        onClick={(e) => handleCheckChange(e.target.value * 1)}
                        type="checkbox"
                        value={city.id}/>
                        {city.name}
                </div>
                : <div className="form-div" key={city.id}>
                        <input 
                        onClick={(e) => handleCheckChange(e.target.value * 1)} 
                        type="checkbox"
                        defaultChecked 
                        value={city.id}/>
                        {city.name}
                </div>
            )
        })
        }
    </form>)
}