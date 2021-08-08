const Pagination = ({moviesPerPage, totalMovies, paginate, currentPage}) =>{
    const pageNumbers = [];
     for(let i=1; i <= Math.ceil(totalMovies / moviesPerPage); i++){
         pageNumbers.push(i)
     }
    

    return (
        <div>
            <div>
                <span>Page</span>
            </div>
            {pageNumbers && pageNumbers.map( n => (
                <button key={n} onClick={()=>paginate(n)}>{n}</button>
            ))}

        </div>
    )
}

export default Pagination