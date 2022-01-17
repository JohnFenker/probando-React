import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustonHook = () => {
    const {state, increment, decrement, reset} = useCounter(100);
    return (
        <>
            <h2>Contador con Hook: {state}</h2>
            <hr />
            <button onClick = {increment} className='btn'>+1</button>
            <button onClick = {decrement} className='btn'>-1</button>
            <button onClick = {reset} className='btn'>re-inicio</button>
        </>
    )
}
