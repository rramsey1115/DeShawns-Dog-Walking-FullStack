
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { editWalkerById, getAllCities } from "../apiManager"
import "./EditWalker.css"

export const EditWalkerForm = ({ walker }) => {
    // console.log('walker', walker)
    const [allCities, setAllCities] = useState([]);
    const [checkedValues, setCheckedValues] = useState(walker.cities.map(wc => wc.id));
    const [updatedWalker, setUpdatedWalker] = useState({
        id: walker.id,
        name: walker.name,
        about: walker.about,
        picUrl: walker.picUrl,
        cities: walker.cities
    });

    const navigate = useNavigate();

    const getAndSetAllCities = () => {
        getAllCities().then(data => setAllCities(data))
    };

    useEffect(()=> {
        getAndSetAllCities()
        // console.log('copy walker', {...walker})
        // setUpdatedWalker({...walker})
        // console.log('updatedWalker', updatedWalker);
        // if (walker.id)
        // {
        //     setCheckedValues(walker.cities.map(wc => wc.id))
        // } 
    }, []);

    useEffect(() => {
        updateWalkerCities();
    }, [allCities, checkedValues])

    useEffect(() => {}, [])
    
    const handleChange = (e) => {

        const {value, checked} = e.target

       console.log('checked', checked)
        if (checked) {
            console.log('if')
            setCheckedValues(pre => [...pre, value * 1])
            // updateWalkerCities();
        }
        else 
        {
            // THIS IS THE PROBLEM I THINK
            // console.log('value', value);
            setCheckedValues(pre => {
                console.log('preELSE', pre)
                console.log('valueELSE', value);
                // console.log('pre', pre);
                console.log([...pre.filter(id => id !== value * 1)])
                return [...pre.filter(id => id !== value * 1)]
            })
            // updateWalkerCities();
        }
    }

    // updates updatedWalker to match checked boxes
    const updateWalkerCities = () => {
        console.log('checkedValues', checkedValues)
        let res = [];
        allCities.map(c => {
            for(let value of checkedValues) {
                if (value === c.id){
                    res.push(c);
                }
            }
        })
            const copy = { ...updatedWalker};
            console.log('res', res);
            copy.cities = [...res];
            // console.log('copy',copy)
            setUpdatedWalker(copy);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (updatedWalker.cities.length === 0)
        {
            return window.alert("No empty fields allowed")
        }
        else
        {
            await editWalkerById(updatedWalker.id, updatedWalker)
            navigate('/walkers');
        }
    }

    // console.log('updatedWalker.cities', updatedWalker?.cities);
    // console.log('cvs', checkedValues);

  
        // console.log('uwELSE', updatedWalker)
    return (
        <form className="walker-edit-form">
        {/* {console.log('updatedWalker', updatedWalker)} */}
        <div className="form-div">
            <label>Name <br/>
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
            <label>Picture URL<br/>
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
            <label>About: <br/>
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
        <p className="cities-text">Cities:</p>



        {/* this is the way I settled on which has no default checked boxes on page load, but works perfectly otherwise */}
        {allCities.map(city => {
            return (
                <div key={city.id}>
                <input
                        onChange={(e) => handleChange(e)}
                        checked={updatedWalker.cities.some(wc => wc.id === city.id)}
                        type="checkbox"
                        value={city.id}/>
                        {city.name}
                </div>
            )
        })}

        {/* button for submitting form */}
        <button type="button" 
            className="add-button"
            id="walker-save-button"
            onClick={(e) => handleSubmit(e)}
            >Save
        </button>
    </form>)
    }





{/* This is the way I was trying to have default checked boxes, tries for about 5 hours on two different days with no luck....
chatGPT just told me to debug after I kept trying new code...rewrote this about 8 times -------------------------------------*/}
{/* {allCities.map(city => {
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
} */}