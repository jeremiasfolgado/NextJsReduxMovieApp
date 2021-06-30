import Link from 'next/link';

const Nav = () => {
    return(
        <ul>
            <li>
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/list'><a>List</a></Link>
            </li>
        </ul>
    )
}

export default Nav;