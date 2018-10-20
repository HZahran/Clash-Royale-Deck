import React from 'react';
import api from '../../api/api';
import Modal from 'react-modal';
import styles from './Card.module.css';
import { YellowButton } from '../buttons/YellowButton';

const CardDetails = ({ idName, name, rarity, description, elixirCost, type, clearDetails }) => {
    console.log('Details', idName)
    return (
        <Modal
            isOpen={!!idName}
            className={`${styles.cardDetailsModal} ${styles[!!idName ? 'fadeIn' : 'fadeOut']}`}
            onRequestClose={clearDetails}
        >
            <div className={styles.cardDetailsContainer}>
                {idName && <img src={api.getImageURL(idName)} className={styles.cardDetailsImage} alt='Card-Img'></img>}
                <div className={styles.cardDetailsContent}>
                    <h1>{name}</h1>
                    <h2>{type}</h2>
                    <p>{rarity}</p>
                    <p>{description}</p>
                    <p>{`Costs ${elixirCost} elixirs`}</p>
                </div>
                <span className={styles.cardDetailsDoneButton}>
                    <YellowButton
                        text='Go Back'
                        onClick={clearDetails} />
                </span>
            </div>
        </Modal>
    );
}

export default CardDetails;