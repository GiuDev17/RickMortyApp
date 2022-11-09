import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './CardDetails.module.scss'




const CardDetails = () => {

    let {id} = useParams()
    let [fetchedData, updateFetchedData] = useState([])
    let {name, image, gender, location, origin, status, species, episode} = fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect(()=>{

        (async function(){
          let data = await fetch(api).then(res=>res.json())// 'await' me permite decirla a javaScript que espere un poco mientras nuetra función búsqueda obtiene los datos de la API
          updateFetchedData(data)
        })()
    
      },[api])


    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className={styles.crd}>
              <div className="d-flex flex-column gap-3">
                    <h1 className='text-center fw-bold'>{name}</h1>
                    <img src={image} alt="" className='img-fluid w-1' /> 


                    
                    {(()=>{
                    if(status === "Dead"){
                        return (
                            <div className= "badge bg-danger fs-5">{status}</div>
                        )
                    }else if(status === "Alive"){
                        return (
                            <div className= "badge bg-success fs-5">
                            {status}
                            </div>
                        )
                    }else{
 
                        return (
                            <div className= "badge bg-secondary fs-5">
                            {status}
                            </div>
                        )
                    }
                  })()}


                   <div className='d-flex flex-column gap-0 '>
                    <h4><span className='fw-bold'>Specie:</span> {species}</h4>
                    <h4><span className='fw-bold'>Gender:</span> {gender}</h4>
                    <h4><span className='fw-bold'>Location:</span> {location?.name}</h4>
                    <h4><span className='fw-bold'>Origin:</span> {origin?.name}</h4>
                    <h4><span className='fw-bold'>Episodes Where Appear:</span> {episode?.length}</h4>
                   </div>    
                   
                </div>    
         </div>
         </div>
        
    );
};

export default CardDetails;