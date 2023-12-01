
import { useEffect, useState } from "react"
import { getAllCities } from "../apiManager"
import "./EditWalker.css"

export const EditWalkerForm = ({ walker }) => {
    const [allCities, setAllCities] = useState([]);
    const [checkedValues, setCheckedValues] = useState([]);
    const [updatedWalker, setUpdatedWalker] = useState({
        id: walker.id,
        name: walker.name,
        about: walker.about,
        picUrl: walker.picUrl,
        cities: walker.cities
    });

    // console.log("updatedWalker", updatedWalker);

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data))
    };

    useEffect(()=> {
        getAndSetAllCities()
    }, [walker]);

    useEffect(()=> {
        setUpdatedWalker({...walker})
    }, [walker]);

    const handleChange = (e) => {
        console.log('e', e);

        const {value, checked} = e.target
       
        if (checked) {
            setCheckedValues(pre => [...pre, value])
        }
        else {
            setCheckedValues(pre => {
                return [...pre.filter(id => id !== value)]
            })
        }
        updateWalkerCities();
    }

    useEffect(() => {
        updateWalkerCities();
    }, [checkedValues])

    // updates updatedWalker to match checked boxes
    const updateWalkerCities = () => {
        let res = [];
        allCities.map(c => {
            checkedValues.map(cv => {
                if (cv == c.id){
                    res.push(c);
                }
            })
        })
    const copy = { ...updatedWalker};
    copy.cities = [...res];
    setUpdatedWalker(copy);
    console.log('res', res);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (updatedWalker.cities.length === 0)
        {
            return window.alert("must select at least 1 city!")
        }
        else
        {
            console.log('updatedWalker', updatedWalker)
        }
    }

    console.log('checkedValues', checkedValues);

    console.log('updatedWalker.cities', updatedWalker?.cities);

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
                  <br/>
        <h5>Cities:</h5>

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
                        <input
                        onChange={(e) => handleChange(e)}
                        type="checkbox"
                        value={city.id}/>
                        {city.name}
                </div>
                : <div className="form-div" key={city.id}>
                        <input 
                        onChange={(e) => handleChange(e)} 
                        type="checkbox"
                        // defaultChecked
                        value={city.id}/>
                        {city.name}
                </div>
            )
        })
        }
        <button type="button" onClick={(e) => handleSubmit(e)}>Save</button>
    </form>)
}