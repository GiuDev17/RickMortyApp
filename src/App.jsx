
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filters from './components/Filters/Filters'
import Cards from './components/Cards/Cards'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'
import NavBar from './components/NavBar/NavBar'
import Episodes from './Pages/Episodes'
import Location from './Pages/Location'
import CardDetails from './components/Cards/CardDetails'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){

  return (
    <Router>
      <div className="app">
         <NavBar />
      </div>

      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/:id" element={<CardDetails />}/>

         <Route path="/episodes" element={<Episodes />}/>
         <Route path="/episodes/:id" element={<CardDetails />}/>

         <Route path="/location" element={<Location />}/>
         <Route path="/location/:id" element={<CardDetails />}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
   
  let [pageNumber, setPageNumber] = useState(1)

  let [search, setSearch] = useState('')

  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')

  let [fetchedData, updateFetchedData] = useState([])

  let {info, results} = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber} &name=${search} &status=${status} &gender=${gender} &species=${species}`

  // este useEffect me va a traer la informacion de la API, donde [api] es digamos un relog, que me actualiza y busca nueva informacion de la API
  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json())// 'await' me permite decirla a javaScript que espere un poco mientras nuetra función búsqueda obtiene los datos de la API
      updateFetchedData(data)
    })()

  },[api])


  return (
    <div className="App">
       
       <h1 className='titl text-center fs-2'>Rick & Morty <span className='fw-bold d-flex justify-content-center fs-1'>Characters</span></h1>
       <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
       
       <Pagination info={info} setPageNumber = {setPageNumber}/>

       <div className="containers">
        <div className="row">
          <Filters 
                  setSpecies={setSpecies}
                  setGender={setGender}
                  setStatus={setStatus} 
                  setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page='/' results = {results}/>
              
              
              
            </div>
          </div>
        </div>
       </div>
      
       <Pagination info={info} setPageNumber = {setPageNumber}/>

    </div> 
  )
}

export default App
