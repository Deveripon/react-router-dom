// Method 1
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const isLoggedIn = true;
    return isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
