import React, { useState, useEffect } from 'react';
import './effects.css';
import {Message} from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;
    useEffect(() => {
        console.log('formState cambio!')
    },[formState]);
    const handleInputChange = ({target})=> {
        setFormState({
            ...formState,
            [ target.name]: target.value
        })

    }
    return (
        <>
            <h2>useEffect</h2>
            <hr />
            <div className='form-group'>
            <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}>
                </input>

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}>
                </input>

            </div>
            {(name === '123') && <Message />}
        </>
    )
}
