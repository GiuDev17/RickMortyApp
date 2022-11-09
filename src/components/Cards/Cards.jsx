import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss'




const Cards = ({results, page}) => {
    console.log(results)
   let display
   
   if(results){

    display = results.map((x) => {
        let {id, name, image, location, status, gender} = x

        return (
        <Link 
                style={{textDecoration: 'none'}}
                to = {`${page}${id}`}
                key={id} 
                className= 'col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'    
                >

                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                 <div className="im1">
                    <img src={image} className= {`img-fluid`} alt=""/>
                 </div>

                 <div className= {styles.content}>
                    <div className='nam  fs-4 fw-bold mb-3'><h2>{name}</h2></div>

                    <div className=''>
                      <div className='fs-6'><span className='fw-bold'>Gender: </span>{gender}</div>
                      <div className='fs-6'><span className='fw-bold'>Last Location:</span> {location.name} </div>
                      
                      
                    </div>

                 </div>
                  
                  {(()=>{
                    if(status === "Dead"){
                        return (
                            <div className= {`${styles.badge} position-absolute badge bg-danger`}>
                            {status}
                            </div>
                        )
                    }else if(status === "Alive"){
                        return (
                            <div className= {`${styles.badge} position-absolute badge bg-success`}>
                            {status}
                            </div>
                        )
                    }else{
 
                        return (
                            <div className= {`${styles.badge} position-absolute badge bg-secondary`}>
                            {status}
                            </div>
                        )
                    }
                  })()}

                 
                </div> 
                </Link>
        )
    })

   }else{
    display = 'No Character Found :-/'
   }

  return <>{display}</>
}

export default Cards