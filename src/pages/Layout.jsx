import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>LOGIN</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>REGISTER</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard'>DASHBOARD</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='mt-5'>
                <Outlet />
            </div>
            <footer>&copy; 2023 Your Company. All rights reserved.</footer>
        </div>
    );
};

export default Layout;
