import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css' 

export const MemoHook = () => {
  const {counter, increment} = useCounter(3000);
  const [show, setShow] = useState(true);
  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('ahi vamos...');
    }
    return `${ iteraciones } iteraciones realizadas.`
  }
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
  return (
      <div>
          <h1>Contador: <small>{ counter }</small> </h1>
          <hr />
          <p>{ memoProcesoPesado }</p>
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
