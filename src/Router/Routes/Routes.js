import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../others/Error";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

        ]
    }
])
export default router;