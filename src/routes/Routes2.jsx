import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./privateRoutes";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route
                path='*'
                element={<NotFound />}
            />

            {/*   handle global error */}
            <Route errorElement={<ErrorPage />}>
                {/* Add your routes here */}
                <Route
                    path='/'
                    element={
                        <PrivateRoutes>
                            <Home />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/register'
                    element={<Registration />}
                />
                <Route
                    path='/dashboard'
                    element={
                        <PrivateRoutes>
                            <Dashboard />
                        </PrivateRoutes>
                    }
                />
            </Route>
        </Route>
    )
);
const Routes2 = () => <RouterProvider router={router} />;

export default Routes2;
