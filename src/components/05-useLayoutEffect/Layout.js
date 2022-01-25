import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'

export const Layout = () => {

  const {counter, increment} = useCounter(1)
  const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter} `)
  const { quote} = !!data && data[0]

  return (
      <div>
          <h1>
              Layout 
          </h1><hr />
            <blockquote className='blockquote text-right'>
                <p className='mb-3'>{quote}</p> 
            </blockquote>
          <button className='btn btn-success btn-sm' onClick={increment}>Siguiente ...</button>
          
               
          
          
      </div>
  )
};
