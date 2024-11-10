import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    const isLoggedIn = true;
    return isLoggedIn ? <Navigate to='/' /> : <Outlet />;
};

export default PublicRoutes;
