import React from 'react';
import './ExerciseCard.css'

const ExerciseCard = (props) => {
    const { addToDetails } = props
    const { picture, name, time } = props.card
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <p><strong>{name}</strong></p>
            <p>Time required: {time}s</p>
            <button onClick={() => addToDetails(props.card)} className='btn-cart'><p>Add to list</p></button>
        </div>
    );
};

export default ExerciseCard;