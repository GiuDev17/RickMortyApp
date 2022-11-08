import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {

  let clear = ()=>{
    setStatus('')
    setPageNumber('')
    setGender('') 
    setSpecies('')
    window.location.reload(false)
  }


  return (
    <div className='col-3'>
        <div className="text-center fw-bold fs-1 mb-4">Filters</div>

        <div
           onClick={clear}
           style= {{cursor: 'pointer', background:'#B8BCA8', color:'#18121E'}} 
           className="text-center mb-3 fw-bold">Clear Filters</div>

        <div className="acordion" id="acordionExample">
          <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
          <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
          <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        </div>

 



 
    </div>
  )
}

export default Filters