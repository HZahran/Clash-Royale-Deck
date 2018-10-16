import React from 'react';
import api from '../../api/api'
const ListCard = ({ idName, elixirCost, getCardDetails }) => (
    <button onClickCapture={() => getCardDetails(idName)}>
        {idName + ' ' + elixirCost}
        <img src={api.getImageURL(idName)} alt='Card-Img'></img>
    </button>
)

export default ListCard;