import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./privateRoutes";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            // handle not found route
            {
                path: "*",
                element: <NotFound />,
            },
            // Add more routes as needed. For example:
            {
                //Error handling for any page
                errorElement: <ErrorPage />,
                children: [
                    //index route: if you want to display something when no other route matches

                    /*  { index: true, element: <h1>Im from index</h1> }, */

                    {
                        path: "/",
                        element: (
                            <PrivateRoutes>
                                <Home />
                            </PrivateRoutes>
                        ),
                    },
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/register",
                        element: <Registration />,
                    },
                    {
                        path: "/dashboard",
                        element: (
                            <PrivateRoutes>
                                <Dashboard />
                            </PrivateRoutes>
                        ),
                    },
                ],
            },
        ],
    },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
