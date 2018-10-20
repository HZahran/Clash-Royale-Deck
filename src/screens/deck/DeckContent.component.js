import React from 'react';
import ListCard from '../../common/card/ListCard.component';
import styles from './Deck.module.css';

const DeckContent = ({ deckList, getCardDetails }) => (
    <section className={styles.content}>
        <div className={styles.list}>
            {deckList.map(item =>
                <div className={styles.card} key={item.idName} >
                    <ListCard
                        getCardDetails={getCardDetails}
                        {...item}
                    />
                </div>
            )}
        </div>
    </section>
)

export default DeckContent;
