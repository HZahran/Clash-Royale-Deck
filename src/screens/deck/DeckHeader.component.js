import React from 'react';
import styles from './Deck.module.css';
import { YellowButton } from '../../common/buttons/YellowButton';

const DeckHeader = ({ generateDeck, allCardsList }) => (
    <header className={styles.header}>
        <span className={styles.headerTitle}>Battle Deck</span>
        <span className={styles.headerButton}>
            <YellowButton
                text='Generate'
                onClick={() => generateDeck(allCardsList)} />
        </span>
    </header>
)

export default DeckHeader;