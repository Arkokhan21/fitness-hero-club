import React, { useEffect, useState } from 'react';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
    const { details } = props

    let totalTime = 0

    for (const detail of details) {
        totalTime = totalTime + detail.time
    }

    const breakTime = ['10s', '20s', '30s', '40s', '50s']
    const [value, setValue] = useState('0s')



    const func = (value) => {
        setValue(value)
        localStorage.setItem('breakTime', value)
    }

    const notify = () => toast("Activity Completed!");

    return (
        <div className='top-container'>
            <div>
                <h2 style={{ textAlign: 'center' }}>Arko Khan</h2>
                <div className='about'>
                    <h3>Student</h3>
                    <h3>Age: 20</h3>
                </div>
            </div>

            <div className='break-container'>
                <h2>Add A Break</h2>
                <div className='button-container'>
                    <button onClick={() => func(breakTime[0])}>10s</button>
                    <button onClick={() => func(breakTime[1])}>20s</button>
                    <button onClick={() => func(breakTime[2])}>30s</button>
                    <button onClick={() => func(breakTime[3])}>40s</button>
                    <button onClick={() => func(breakTime[4])}>50s</button>
                </div>
            </div>

            <div className='d-container'>
                <h2>Exercise Details</h2>
                <div className='details'>
                    <h3>Exercise time: {totalTime}s</h3>
                    <h3>Break time: {value}</h3>
                </div>
            </div>

            <div><button onClick={notify} className='complete-btn'><p>Activity Completed</p></button> <ToastContainer /></div>
        </div>
    );
};

export default Details;