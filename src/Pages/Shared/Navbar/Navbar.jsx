import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/Logo.png'
import Container from '../../../Components/Container';

const Navbar = () => {
    const NavLinks = <>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? " text-[#00A6FB]" : " "} >Home</NavLink></li>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/About'} className={({ isActive }) =>
                isActive ? " text-[#00A6FB]" : " "} >About</NavLink></li>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/Appointment'} className={({ isActive }) =>
                isActive ? " text-[#00A6FB]" : " "} >Appointment</NavLink></li>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/Login'} className={({ isActive }) =>
                isActive ? " text-[#00A6FB]" : " "} >Login</NavLink></li>
    </>
    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link><img src={logo} className='w-44 ' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link> <button className="btn bg-[#00A6FB] text-white hover:bg-[#31a1da]">Appoinment</button></Link>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;