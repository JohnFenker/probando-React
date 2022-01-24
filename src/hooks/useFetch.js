import { useEffect, useRef, useState } from 'react';
// clase que consume una api
export const useFetch = (url) => {
    //referencia que se usa para 
    const isMounted = useRef(true);
    //
    const [state, setState] = useState({
       data: null,
       loading: true,
       error: null
   });
   //ante cualquier cambio retorna que el componente consumirdor, ya no esta. La ref pasa a ser false.
   useEffect(() => {
     return () => {
       isMounted.current = false;
     };
   }, []);
   //ante una cambio en la url, llama a consumir otra vez.
   useEffect(() => {
       setState({ data:null, loading: true, error:null})
       fetch(url).then(resp => resp.json()).then(data => {
        //si la ref que esta siendo monitoreada por un useEffect, esta true, muestra. Caso contrario no muestra nada.
        //Esto es para evitar que se deshabilite antes de resibir los datos de la consulta Fetch()
        if ( isMounted.current) {
                setState({
                    loading:false,
                    error: null,
                    data
                })
        } else {
            console.log('no se llamo')
        }   
    });

   }, [url])


   return state;

};
