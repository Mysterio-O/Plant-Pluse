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
import DashLayout from "../Dashboard/DashLayout/DashLayout";
import Overview from "../Dashboard/pages/Overview";
import Profile from "../Dashboard/pages/Profile";
import Support from "../components/Support/Support";
import SwitchAccount from "../Dashboard/SwitchAccount/SwitchAccount";
import Setting from "../Dashboard/pages/Setting";

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
                path: '/edit_plant/:id',
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
            <PlantDetails />
        </PrivateRoute>
    },
    {
        path: '/about_us',
        Component: AboutUs
    },
    {
        path: '/support',
        Component: Support
    },
    {
        path: '/contact_us',
        Component: ContactUs
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashLayout />
        </PrivateRoute>,
        children: [
            { index: true, Component: Overview },
            { path: 'profile', Component: Profile },
            { path: 'add-plant', Component: AddPlants },
            { path: 'my_plants/:id', Component: MyPlants },
            { path: 'all_plants', Component: AllPlants },
            { path: 'setting', Component: Setting }
        ]
    },
    {
        path: '/switch_account',
        Component: SwitchAccount
    }
])

export default Router;