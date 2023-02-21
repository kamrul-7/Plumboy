import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../others/Error";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Review from "../../Pages/Home/Review/Review";
import AddService from "../../Pages/Home/Services/AddService";
import MyServices from "../../Pages/Home/Services/MyServices";
import ServiceCardDetails from "../../Pages/Home/Services/ServiceCardDetails";
import Services from "../../Pages/Home/Services/Services";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
                path: '/',
                element: <Services></Services>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/myservices',
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceCardDetails></ServiceCardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://plumboy-server.vercel.app/services/${params.id}`)
            },

        ]
    }
])
export default router;