import React from 'react';
import DeckContent from './DeckContent.component';
import DeckFooter from './DeckFooter.component';

const Deck = ({ average, ...rest }) => (
    <section className='DeckMain'>
        <DeckContent {...rest} />
        <DeckFooter average={average} />
    </section>
);

Deck.prototypes = {

}

export default Deck;