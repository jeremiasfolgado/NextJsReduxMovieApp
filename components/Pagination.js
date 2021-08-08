import styled from "styled-components";

const PaginationContainer = styled.div`
    width:100%;
    
    display:flex;
    flex-direction: column;
    align-items: center;

`
const PageButton = styled.div`
    border: 2px solid grey;
    border-radius: 50%;
    padding:0.5rem;
    margin-right: 0.3rem;
    margin-bottom: 0.5rem;
    color:${({active}) => active ? 'white' : 'grey'};
    background-color: ${({active}) => active ? 'grey' : 'white'} ;
    font-weight: bold;
    &:hover{
        color:grey;
        background-color:white;
        border:none;
        transition: 0.4s ease-in;
        cursor: pointer;   }
`

const Pagination = ({moviesPerPage, totalMovies, paginate, currentPage}) =>{
    const pageNumbers = [];
     for(let i=1; i <= Math.ceil(totalMovies / moviesPerPage); i++){
         pageNumbers.push(i)
     }
    

    return (
        <PaginationContainer>
                <span>Pages</span>
            <div style={{marginTop:'0.5rem', display:'flex'}}>

                {pageNumbers && pageNumbers.map( n => (
                    <PageButton key={n} active={currentPage === n} onClick={()=>paginate(n)}>{n}</PageButton>
                ))}
            </div>

        </PaginationContainer>
    )
}

export default Pagination