import React, {useCallback, useState} from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement'; 

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //esta funcion se genera de nuevo cada vez que es reformada. Y ***
  //const increment = ()=>{
  //    setCounter(counter + 1); 
  //}

  //con este useCallback se soluciona.
  const increment = useCallback((num) => {
          setCounter( c => c + num );
      },[ setCounter ] )  
  return (
      <div>
          <h2>useCallback Hook: {counter} </h2>
          <hr />
          
          <ShowIncrement increment = { increment } />
      </div>
  )
};
