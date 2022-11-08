import React from 'react'
import styles from './Cards.module.scss'




const Cards = ({results}) => {
    console.log(results)
   let display
   
   if(results){

    display = results.map((x) => {
        let {id, name, image, location, status, gender} = x

        return (<div key={id} className= 'col-4 mb-4 position-relative'>

                <div className={styles.cards}>
                 <div className="im1">
                    <img src={image} className= {`img-fluid`} alt=""/>
                 </div>

                 <div className= {styles.content}>
                    <div className='fs-4 fw-bold mb-3'>{name}</div>

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
                </div>
        )
    })

   }else{
    display = 'No Character Found :-/'
   }

  return <>{display}</>
}

export default Cards