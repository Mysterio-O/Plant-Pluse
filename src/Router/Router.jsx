import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../components/Home/Home";
import AddPlants from "../components/Plants/AddPlants";
import AllPlants from "../components/Plants/AllPlants";
import MyPlants from "../components/Plants/MyPlants";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import Page404 from "../pages/Page404";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <Page404/>,
        children: [
            {index:true, Component: Home},
            {
                path:'/all_plants',
                element: <AllPlants></AllPlants>
            },
            {
                path:'/add_plants',
                element: <AddPlants></AddPlants>
            },
            {
                path:'/my_plants',
                element: <MyPlants></MyPlants>
            },
        ]
    },
    {
        path:'/auth/register',
        Component: Register
    },
    {
        path:'/auth/login',
        Component: SignIn
    }
])

export default Router;