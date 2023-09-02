import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import './Navbar.css'
import { useState } from 'react';
export function Navbar(){
    const [check, setCheck] = useState(false);

    return(
        <nav>
            <Link to="#">
                <img src="../src/github-mark/github-mark.png" alt="github-logo" />
            </Link>
            <ul className={'menu' && check ? 'open' : ''}>
                <li>
                    <NavLink to="/" onClick={() => setCheck(false)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => setCheck(false)}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => setCheck(false)}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <label htmlFor='check' className='checkbtn' onClick={() => setCheck(!check)}><i className="fa fa-bars"></i></label>
            <input type="checkbox" id='check' className='check' />
        </nav>
    );
}