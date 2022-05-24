import { Link } from 'react-router-dom';
import style from './Header.module.scss'
import logo from '../../../assets/images/Header/Header.svg'
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="container">
            <div className={style.header}>
                <div className={style.header__logo}>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <nav className={style.header__nav}>
                    <ul className={style.header__nav_wrapper}>
                        <li className={style.header__nav_item}>
                            <Link to="/">
                                Categories
                            </Link>
                        </li>
                        <li className={style.header__nav_item}>
                            <Link to="/">
                                Popular
                            </Link>
                        </li>
                        <li className={style.header__nav_item}>
                            <Link to="/">
                                Contact
                            </Link>
                        </li>
                        <li className={style.header__nav_item}>
                            <Link to="/">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Button text="SignIN" />
            </div>
        </div>

    )
}
export default Header;
