import React from 'react';
import DeckContent from './DeckContent.component';
import DeckFooter from './DeckFooter.component';
import DeckHeader from './DeckHeader.component';

const Deck = ({ average, generateDeck, allCardsList, ...rest }) => (
    <section className='DeckMain'>
        <DeckHeader allCardsList={allCardsList} generateDeck={generateDeck} />
        <DeckContent {...rest} />
        <DeckFooter average={average} />
    </section>
);

Deck.prototypes = {

}

export default Deck;