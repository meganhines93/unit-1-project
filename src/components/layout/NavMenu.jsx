import { Link } from 'react-router';

const NavMenu = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cats">Meet The Cats</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;