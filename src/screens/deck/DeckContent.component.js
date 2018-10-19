import React from 'react';
import ListCard from '../../common/card/ListCard.component';
import { YellowButton } from '../../common/buttons/YellowButton';
import styles from './Deck.module.css';

const DeckContent = ({ deckList, generateDeck, allCardsList, getCardDetails }) => (
    <div class={styles.content}>
        <div class={styles.list}>
            {deckList.map(item =>
                <div className={styles.card}>
                    <ListCard
                        key={item.idName}
                        getCardDetails={getCardDetails}
                        {...item}
                    />
                </div>
            )}
        </div>
        <YellowButton
            text='Generate'
            onClick={() => generateDeck(allCardsList)} />
    </div>
)

export default DeckContent;
