import React from 'react'

const Pagination = ({arraypages, currentPage, setCurrentPage, quantityPages }) => {

    const prevPage=()=>{
        if(currentPage - 1 === 0){
            setCurrentPage(quantityPages)
        }else{
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage=()=>{
        if(currentPage + 1 > quantityPages){
            setCurrentPage(1)
        }else{
            setCurrentPage(currentPage + 1)
        }
    }

    const changePageTo = n => setCurrentPage(n)
  return (
    <div className='pagination-container'>
        <div className='pagination-prev-next' onClick={prevPage}><i class="fa-solid fa-angles-left"></i></div>
        <ul className='pagination-number-container'>
            {
                arraypages?.map(num=> (
                    <li 
                    onClick={()=> changePageTo(num)} 
                    key ={num} 
                    className={currentPage === num ? `page-number 
                    page-active` : `page-number`}
                    >{num}</li>
                ))
            }
        </ul>
        <div className='pagination-prev-next' onClick={nextPage}><i class="fa-solid fa-angles-right"></i></div>
    </div>
  )
}

export default Pagination