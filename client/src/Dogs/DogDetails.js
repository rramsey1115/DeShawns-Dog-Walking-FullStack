import { useState } from "react";
import { useParams } from "react-router-dom"

export const DogDetails = () => {
    const dogId = useParams();
    const [dog, setDog] = useState({});

    const findAndSetCurrentDog = () => {
        
    }
}