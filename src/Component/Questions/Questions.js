import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <h2 className='title'>Today's Questions</h2>
            <div className='questions-container'>
                <div>
                    <h3>1. How does React Work ?</h3>
                    <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
                </div>
                <div>
                    <h3>2. What are the differences between props and state ?</h3>
                    <p>Props: The Data is passed from one component to another. It is Immutable (cannot be modified). Props are read-only. <br />
                        State: The Data is passed within the component only. It is Mutable ( can be modified). State is both read and write.
                    </p>
                </div>
                <div>
                    <h3>3. What is the use of useEffect ?</h3>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;