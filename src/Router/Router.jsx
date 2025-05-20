import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout
    }
])

export default Router;