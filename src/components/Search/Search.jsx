import React from 'react';
import styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
    return (

    <>
        <form className=''>
            <div className='search-icon d-flex justify-content-center mb-5 mt-4'>
            <input 
             onChange={(e)=>{
                setPageNumber(1)
                setSearch(e.target.value)
                
             }}
             placeholder=' » Search for Character or Letters «'
             type="text" 
             className={styles.input}/>
            </div>


            
        </form>
        
    </>
    );
};

export default Search;