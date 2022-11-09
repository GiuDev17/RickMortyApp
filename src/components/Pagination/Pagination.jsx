import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';



const Pagination = ({info, pageNumber, setPageNumber}) => {

    let [width, setWidth] = useState(window.innerWidth)
    console.log(width)

    let updateDimension = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", updateDimension)
        return ()=> window.removeEventListener("resize", updateDimension)
    },[])

    return (
<>    
     <style jsx>
          {`
          @media (max-width 786px){
             .next,
             .prev{
                display: none;
             }
            .pagination{
                font-size: 14px
            }
          }
          `}
     </style>
  

    <ReactPaginate 

    className = 'pagination justify-content-center gap-3 my-3'
    nextLabel = {<i class='bx bxs-right-arrow-circle fs-1 p-1'></i>}
    nextClassName='btn btn-light border rounded-pill next'
    previousLabel = {<i class='bx bxs-left-arrow-circle fs-1 p-1'></i>}
    previousClassName='btn btn-light border rounded-pill prev'
    pageClassName='page-item'
    pageLinkClassName='page-link bg-success p-2 text-dark bg-opacity-25 rounded'
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    activeClassName = 'active'
    onPageChange = {(data) => {
        setPageNumber(data.selected + 1)
    }}
    pageCount = {info?.pages}
     />
</>   
    )  
};

export default Pagination;