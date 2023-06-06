import { Link } from 'react-router-dom';
import { useRoute } from '../_shared/hooks/useRoute';
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">LOGO</h1>
            <nav>
                <ul className="header__menu">
                    <li className="header__menu-link">
                        <Link className={useRoute('/') ? 'active' : ''} to={'/'}>Home</Link>
                    </li>
                    <li className="header__menu-link">
                        <Link className={useRoute('/users') ? 'active' : ''} to={'/users'}>Users</Link>
                    </li>
                    <li className="header__menu-link">
                        <Link className={useRoute('/tickets') ? 'active' : ''} to={'/tickets'}>Tickets</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
