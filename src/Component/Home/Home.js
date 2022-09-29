import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Home.css'

const Home = () => {

    const [card, setCard] = useState([])

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const addToDetails = (card) => {
        const newDetails = [...details, card]
        setDetails(newDetails)
    }

    return (
        <div className='home-container'>
            <div className='exerciseCard-container'>
                {
                    card.map(item => <ExerciseCard card={item} key={item.id} addToDetails={addToDetails}></ExerciseCard>)
                }
            </div>
            <div className='details-container'>
                {/* <Details details={details}></Details> */}
            </div>
        </div>
    );
};

export default Home;