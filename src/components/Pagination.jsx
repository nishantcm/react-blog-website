import React from 'react'

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
    const totalPages = Math.ceil(blogs.length / pageSize);
    // console.log(totalPages)
    const renderPaginationLins = () =>{
        return Array.from ({length: totalPages}, (_, i) => i + 1).map((pageNumber) =>(
            <li className={pageNumber === currentPage ? "activerPagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber) }>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <div>Pagination</div>
  )
}

export default Pagination