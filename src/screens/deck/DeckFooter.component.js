import React from 'react';
import styles from './Deck.module.css';

const DeckFooter = ({ average }) => (
    <div className={styles.footer}>
        <span className={styles.footerText}>{`Average Elixir cost: ${average}`}</span>
    </div>
)

export default DeckFooter;