import React from 'react';
import styles from './Deck.module.css';
import { Elixir } from '../../common/icons/Elixir';

const DeckFooter = ({ average }) => (
    <footer className={styles.footer}>
        <span className={`${styles.footerText} ${styles.wrapText}`}>{`Average Elixir cost: `}</span>
        <span className={styles.footerText}>{average}</span>
        <span className={styles.footerElixir}>
            <Elixir />
        </span>
        <img src={require('../../assets/images/Sword.png')} className={styles.footerSword} alt="Sword" />
    </footer>
)

export default DeckFooter;