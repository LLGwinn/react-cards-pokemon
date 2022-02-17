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

/** Make axios call to fetch new card, or remove all cards from state */
const useAxios = (url, formatFn) => {
    const [cards, setCards] = useState([]);

    const addCard = async (pokeName="") => {
        if (pokeName.length > 0) {url = url.concat(pokeName)};
        const response = await axios.get(url);
        const stateData = formatFn(response);

        setCards(cards => [...cards, { ...stateData, id: uuid() }]);
    };

    const removeCards = () => {
        setCards([]);
    }
    return [cards, addCard, removeCards]
}

export {useFlip, useAxios};


