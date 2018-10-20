import React from 'react';
import styles from './Buttons.module.css'

export const YellowButton = ({ text, onClick }) => (
    <button className={styles.yellow} onClickCapture={onClick}>
        <img src={require('../../assets/images/BattleButton.png')} className={styles.buttonImage} alt={text} />
        <span className={styles.buttonText}>{text}</span>
    </button>
)