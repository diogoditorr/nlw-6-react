import React, { useState } from 'react'

export function ButtonCounter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}
