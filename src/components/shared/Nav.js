import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import { authContext } from '../../context/UserContext';
import useAdmin from '../../hook/useAdmin';
import useSeller from '../../hook/useSeller';

const Nav = () => {
    const { user, logOut } = useContext(authContext);
    const { bookedOrders } = useContext(productContext);
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
                        <Link to="/" className=""><img className='h-12' src="assets/logo.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <p className='mr-3 font-bold'>{isAdmin ? 'admin' : ''}{isSeller ? 'seller' : ''}{!isSeller && !isAdmin ? 'user' : ''}</p>
                        {
                            !user ?
                                <Link to="../signup" className="btn">Sign up</Link> :
                                <div className="flex items-center">
                                    <div className="dropdown dropdown-end mr-2">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                <span className="badge badge-sm indicator-item">{bookedOrders?.length}</span>
                                            </div>
                                        </label>
                                        <div tabIndex={1} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                            <div className="card-body">
                                                <span className="font-bold text-lg">{bookedOrders?.length} Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={2} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} alt='' />
                                            </div>
                                        </label>
                                        <ul tabIndex={3} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>
                                            {
                                                isAdmin &&
                                                <li><Link to="../dashboard">admin-dashboard</Link></li>
                                            }
                                            <li><Link to="../seller-dashboard">seller-dashboard</Link></li>
                                            <li onClick={handleLogout}><Link>Logout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;