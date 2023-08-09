import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cotact from "../pages/Cotact";
import Layout from "../Layout/Layout";


const router = createBrowserRouter([
    {

        path: "/",
        element: <Layout></Layout>,

        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "about",
                element: <About></About>
            },

            {
                path: "contact",
                element: <Cotact></Cotact>
            },


        ]
    }


]);

export default router;