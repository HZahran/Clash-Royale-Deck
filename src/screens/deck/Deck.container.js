import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCardDetails, getCards, generateDeck } from './Deck.actions';

class DeckContainer extends Component {
    render() {
        return (
            
        );
    }
}

function mapStateToProps({ deckReducer }) {
    return {
        ...deckReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getCards,
            generateDeck,
            getCardDetails
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);