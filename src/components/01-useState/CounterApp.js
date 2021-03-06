import React, { useState } from 'react'
import './counter.css'


export const CounterApp = () => {
    const [state, setState] = useState({counter1: 10, counter2:20})
    const {counter1, counter2} = state;

    return (
        <>
            <h1>Probando el useState</h1>
            <h3>Temos un hook, useState, que manipula un objeto (contador 1 y 2). Con el seteador incrementamos un solo contador.</h3>
            <h1>Contador1: { counter1 }</h1>
            <h1>Contador2: { counter2 }</h1>
            <hr />
            <button className='btn btn-primary'
            onClick={()=>{
                setState({
                    ...state,
                    counter1: counter1 + 1
                });
            }}>
                +1</button> 
        </>
    )
}
