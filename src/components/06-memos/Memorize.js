import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {
  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true)


  return (
      <div>
          <h1>Counter: <Small value={ counter } /></h1>
          <hr />
          <button className='btn btn-primary btn-sm' 
                  onClick={increment}
                  >
          +1
          </button> &nbsp;&nbsp;
          <button className='btn btn-secondary btn-sm' 
                  onClick={()=>{setShow(!show)}}
                  >
          Mostrar/Ocultar { JSON.stringify( show ) }
          </button>
      </div>
  )
};
