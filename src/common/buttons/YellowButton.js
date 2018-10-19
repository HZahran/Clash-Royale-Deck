import React from 'react';
import styles from './Buttons.module.css'

export const YellowButton = ({ text, onClick }) => (
    <button className={styles.yellow} onClickCapture={onClick}>
        {text}
    </button>
)