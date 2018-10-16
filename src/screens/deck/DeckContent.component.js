import React from 'react';
import ListCard from '../../common/card/ListCard.component';

const DeckContent = ({ deckList, generateDeck, allCardsList, getCardDetails }) => (
    <div>
        {deckList.map(item => <ListCard key={item.idName} {...item} getCardDetails={getCardDetails} />)}
        <button onClickCapture={() => generateDeck(allCardsList)}></button>
    </div>
)

export default DeckContent;
