import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Providers/Authprovider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(
                toast.success('Successfully Log Out')
        )
            .catch()
    }

    const NavNavLinks = <>
        <li className="font-bold text-lg">
            <NavLink to={'/'} className={({ isActive, isPending }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-1"
                    : isPending
                        ? "pending "
                        : ""
            }>Home</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/dashboard'} className={({ isActive, isPending }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-2"
                    : isPending
                        ? "pending "
                        : ""
            }>Dashboard</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/About'} className={({ isActive, isPending }) =>
                isActive
                    ? "border-black border-b-"
                    : isPending
                        ? "pending "
                        : ""
            }>About</NavLink>
        </li>

    </>
    return (

        <div className="border-b-2 border-black">
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavNavLinks}
                        </ul>
                    </div>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" className="w-16 h-16" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 space-x-4">
                        {NavNavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border-black border-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow  menu-sm dropdown-content bg-base-100 rounded-box w-52 flex flex-col">
                                    <li><p className="text-lg font-semibold">{user.displayName}</p></li>
                                    <li><p className="text-md font-semibold">{user.email}</p></li>
                                    <li className="self-end"><Link onClick={handelLogOut} className="bg-black text-white px-4 my-">Logout</Link></li>
                                </ul>
                            </div>
                            :
                            <NavLink to={'/login'}>
                                <button className="px-4 py-2 bg-black text-white rounded-md font-medium">Login</button>
                            </NavLink>
                    }
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Navbar;