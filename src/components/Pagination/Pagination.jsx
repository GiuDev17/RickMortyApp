import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'


const Pagination = ({info, pageNumber, setPageNumber}) => {

    return <ReactPaginate 

    className = 'pagination justify-content-center gap-3 my-3'
    nextLabel = {<i class='bx bxs-right-arrow-circle fs-1 p-1'></i>}
    nextClassName='btn btn-light border rounded-pill'
    previousLabel = {<i class='bx bxs-left-arrow-circle fs-1 p-1'></i>}
    previousClassName='btn btn-light border rounded-pill'
    pageClassName='page-item'
    pageLinkClassName='page-link bg-success p-2 text-dark bg-opacity-25 rounded'
    activeClassName = 'active'
    onPageChange = {(data) => {
        setPageNumber(data.selected + 1)
    }}
    pageCount = {info?.pages}
     />
};

export default Pagination;