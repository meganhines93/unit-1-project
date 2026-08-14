import { Link } from "react-router";

const NavMenu = () => {
    return(
        <nav>
            <ul className ="nav-menu">
                <li>
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/meetthecats">
                        Meet the Cats
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/menu">
                        Menu
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/events">
                        Events
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavMenu;