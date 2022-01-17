import React, { useEffect } from 'react'

export const Message = () => {
    //
    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente des-montado');
        }
    }, [])
    //
    return (
        <>
            <h2>Todo genial</h2>

        </>
    )
}
