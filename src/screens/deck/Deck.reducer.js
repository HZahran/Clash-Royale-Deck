import {
    GET_CARDS,
    GENERATE_DECK,
    GET_CARD_DETAILS
} from "./Deck.types";

const initialState = {
    allCardsList: [],
    deckList: [],
    cardDetails: {},
    average: 0
};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                allCardsList: action.data
            };
        case GENERATE_DECK:
            return {
                ...state,
                deckList: action.data,
                average: action.average
            };
        case GET_CARD_DETAILS:
            return {
                ...state,
                cardDetails: action.data
            };
        default:
            return state;
    }
};
