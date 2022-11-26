import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import useAdmin from '../../hook/useAdmin';
import useSeller from '../../hook/useSeller';

const Nav = () => {
    const { user, logOut } = useContext(authContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);

    const handleLogout = () => {
        logOut()
            .then(res => console.log(res))
            .then(data => console.log(data))
    }
    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="../products">Shop</Link></li>
        <li><Link to="../blog">blog</Link></li>
    </>
    return (
        <nav className='shadow-sm'>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navMenu}
                            </ul>
                        </div>
                        <Link to="/" className="text-xl bg-primary p-2 rounded-lg font-bold text-white">RESELLER</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <p className='mr-3 font-bold'>{isAdmin ? 'admin' : ''}{isSeller ? 'seller' : ''}{!isSeller && !isAdmin ? 'user' : ''}</p>
                        <Link to="../seller-dashboard" className="btn mr-2">seller-dashboard</Link>
                        <Link to="../dashboard" className="btn mr-2">admin-dashboard</Link>
                        {
                            !user ?
                                <Link to="../signup" className="btn">Sign up</Link> :
                                <button onClick={handleLogout} className="btn">Logout</button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;