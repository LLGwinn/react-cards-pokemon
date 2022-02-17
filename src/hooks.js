import {useState} from 'react';
import uuid from "uuid";
import axios from "axios";

/** Flip card over */
const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard];
}

/** Make axios call to fetch new card */
const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async (pokeName="") => {
        if (pokeName.length > 0) {url = url.concat(pokeName)};
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard]

}

export {useFlip, useAxios};


