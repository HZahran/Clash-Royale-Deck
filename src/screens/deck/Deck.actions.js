
import { shuffleList, calculateAverage } from '../../utils';
import api from '../../api/api';

import {
    GET_CARDS,
    GENERATE_DECK,
    GET_CARD_DETAILS,
    CLEAR_CARD_DETAILS
} from "./Deck.types";

export const getCards = () => dispatch => {
    api.getCards()
        .then(res => {
            dispatch({ type: GET_CARDS, data: res })
            dispatch(generateDeck(res))
        })
        .catch(err => console.log(err))
};

export const generateDeck = (allCardsList) => {
<<<<<<< HEAD
    if(!allCardsList.length) return;
=======
    if (!allCardsList.length) return;
>>>>>>> afd067765bab33263af825634028a2de7ec3e28c
    let filteredData = shuffleList(allCardsList, 8);
    let average = calculateAverage(filteredData.map(card => card.elixirCost))
    return {
        type: GENERATE_DECK,
        data: filteredData,
        average
    }
};

export const getCardDetails = (id) => dispatch => {
    api.getCardDetails(id)
        .then(res => dispatch({ type: GET_CARD_DETAILS, data: res }))
        .catch(err => console.log(err))
};

export const clearDetails = () => ({
    type: CLEAR_CARD_DETAILS
})