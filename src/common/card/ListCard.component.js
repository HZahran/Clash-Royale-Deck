import React from 'react';
import api from '../../api/api'
import styles from './Card.module.css';
import { Elixir } from '../icons/Elixir';

const ListCard = ({ idName, elixirCost, getCardDetails }) => (
    <div className={styles.listCard} onClickCapture={() => getCardDetails(idName)} >
        <img src={api.getImageURL(idName)} alt='Card-Img' className={styles.listCardImg} />
        <span className={styles.listCardText}>{idName.toUpperCase()}</span>
        <div className={styles.elixir}>
            <Elixir value={elixirCost} />
        </div>
    </div>
)

export default ListCard;