import React from 'react';
import api from '../../api/api'
import styles from './Card.module.css';

const ListCard = ({ idName, elixirCost, getCardDetails }) => (
    <div className={styles.listCard}>
        <img src={api.getImageURL(idName)} alt='Card-Img' className={styles.listCardImg} onClickCapture={() => getCardDetails(idName)} />
        <span className={styles.listCardText}>{idName.toUpperCase()}</span>
        <div className={styles.elixir}>{elixirCost}</div>
    </div>
)

export default ListCard;