import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../components/Home/Home";
import AddPlants from "../components/Plants/AddPlants";
import AllPlants from "../components/Plants/AllPlants";
import MyPlants from "../components/Plants/MyPlants";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import Page404 from "../pages/Page404";
import PlantDetails from "../components/PlantDetails/PlantDetails"
import PrivateRoute from "../Provider/PrivateRoute";
import AboutUs from "../components/AboutUs/AboutUs";
import EditPlant from "../components/EditPlant/EditPlant";
import ContactUs from "../components/ContactUs/ContactUs";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <Page404 />,
        children: [
            { index: true, Component: Home },
            {
                path: '/all_plants',
                element: <AllPlants></AllPlants>
            },
            {
                path: '/add_plants',
                element: <PrivateRoute>
                    <AddPlants></AddPlants>
                </PrivateRoute>
            },
            {
                path: '/my_plants/:id',
                element: <PrivateRoute>
                    <MyPlants></MyPlants>
                </PrivateRoute>
            },
            {
                path:'/edit_plant/:id',
                Component: EditPlant
            }
        ]
    },
    {
        path: '/auth/register',
        Component: Register
    },
    {
        path: '/auth/login',
        Component: SignIn
    },
    {
        path: '/plantDetails/:id',
        element: <PrivateRoute>
            <PlantDetails/>
        </PrivateRoute>
    },
    {
        path: '/about_us',
        Component: AboutUs
    },
    {
        path: '/contact_us',
        Component: ContactUs
    }
])

export default Router;