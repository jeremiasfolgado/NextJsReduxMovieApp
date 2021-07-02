import { useSelector } from "react-redux";
import CardMovie from "./CardMovie";


const Cards = () => {
    const moviesResult = useSelector(state => state.get.searchResult)
    
    return (
        <ul className="list-group">
            {moviesResult && moviesResult.map(movie => <CardMovie movie={movie}/>)}
        </ul>
    )
}

export default Cards;