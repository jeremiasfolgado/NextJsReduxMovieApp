import Container from '../components/container.js';
import { useSelector } from 'react-redux';

const List = () => {
    const todos = useSelector(state => state.post.ToDos);
    return (
        <Container>
            <h1>List page</h1>
            {
                todos?.map(todo => (
                    <div>
                        {todo.string} {todo.number}
                    </div>
                ))
            }
        </Container>
    )
}

export default List;