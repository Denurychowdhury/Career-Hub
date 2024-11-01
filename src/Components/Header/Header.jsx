import { NavLink } from "react-router-dom";
import careerlogo from '../../assets/CareerHub.png'

const Header = () => {
    const lists = <>
        <li> <NavLink to='/'>Statistics</NavLink></li>
        <li> <NavLink to='/applied'>Applied Jobs</NavLink></li>
        <li> <NavLink to='/blog'>Blog</NavLink></li>

    </>
    return (
        <div className="md:w-10/12 mx-auto w-full">
            <div className="navbar bg-base-100 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {lists}
                        </ul>
                    </div>
                    <a className="p-2">
                        <img src={careerlogo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r text-xl text-white from-[#9873FF] to-[#9873FF]">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;