import React from 'react';
import api from '../../api/api'

const CardDetails = ({ idName, name, rarity, description, elixirCost, type }) => (
    <div>
        {idName && <img src={api.getImageURL(idName)} alt='Card-Img'></img>}
        <h1>{idName}</h1>
        <h1>{name}</h1>
        <h1>{rarity}</h1>
        <h1>{description}</h1>
        <h1>{elixirCost}</h1>
        <h1>{type}</h1>
    </div>
)

export default CardDetails;