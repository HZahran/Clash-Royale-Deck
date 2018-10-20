import React from 'react';
import styles from './Icons.module.css'

export const Elixir = ({ value }) => (
    <div className={styles.elixir}>
        <span className={styles.elixirText}>{value}</span>
    </div>
)