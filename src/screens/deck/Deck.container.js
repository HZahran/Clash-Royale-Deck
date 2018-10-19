import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCardDetails, getCards, generateDeck } from './Deck.actions';
import Deck from './Deck.component';
import CardDetails from '../../common/card/CardDetails.component';
import styles from './Deck.module.css';

class DeckContainer extends Component {

    componentDidMount() {
        const { getCards } = this.props;
        getCards();
    }

    render() {
        const { cardDetails, ...rest } = this.props;
        return (
            <main className={styles.deckContainer}>
                <Deck {...rest} />
                <CardDetails {...cardDetails} />
            </main>
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