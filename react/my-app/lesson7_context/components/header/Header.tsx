import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeProvider';
import { useRoute } from '../_shared/hooks/useRoute';
import './header.scss'

const Header = () => {
    // const context = useContext(ThemeContext) as any;
    const { theme, toggleTheme } = useContext(ThemeContext) as any;

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
                    <li className="header__menu-link">
                        <Link className={useRoute('/movies') ? 'active' : ''} to={'/movies'}>Movies</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <p>{theme}</p>
                <input type='checkbox' checked={theme === 'dark'} onChange={toggleTheme} />
            </div>
        </header>
    )
}

export default Header;
