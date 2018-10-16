import React from 'react';
import ListCard from '../../common/card/ListCard.component';

const DeckContent = ({ deckList, generateDeck, allCardsList }) => (
    <div>
        {deckList.map(item => <ListCard {...item} />)}
        <button onClickCapture={() => generateDeck(allCardsList)}></button>
    </div>
)

export default DeckContent;
