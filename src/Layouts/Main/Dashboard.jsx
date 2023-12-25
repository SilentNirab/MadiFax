import { FcMenu } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import { useContext } from "react";

const Dashboard = () => {
    
    const {user} = useContext(AuthContext)
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="drawer md:drawer-open first-line:">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className=" flex justify-between p-4">
                        <label htmlFor="my-drawer-2" className="btn bg-black hover:bg-[#ea7835] drawer-button md:hidden"><FcMenu className="text-xl"></FcMenu></label>
                    
                    </div>
                    {/* dashboard content */}
                    <div className="flex-1 p-8">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-black text-white">
                    <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6 py-2">
                                <img src={user?.photoURL} className="flex-shrink-0 object-cover object-center btn- flex w-20 h-20 mr-auto -mb-8 ml-auto rounded-full shadow-xl" />
                                <p className="mt-12 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">{user?.displayName}</p>
                            </div>
                                    <li>
                                        <NavLink to="/dashboard">
                                             Profile</NavLink>
                                    </li>
                                    <li className="mt-3">
                                        <NavLink to="/dashboard/cratetask">
                                            Add Task</NavLink>
                                    </li>

                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                Home</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;