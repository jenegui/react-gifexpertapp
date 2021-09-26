import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGif';

 
 export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    useEffect( () => {

        getGif( category )
            .then( imgs => {

                setstate( {
                    data: imgs,
                    loading: false
                });
                // setTimeout( () =>{
                   
                // },3000 );
                
            });

    },[ category ]);
    
    return state; //{ data:[], loading: true }

 }