import { createBrowserRouter } from "react-router-dom";

import HeroLayout from "./layouts/HeroLayout";
import AppLayout from "./layouts/AppLayout";

import HomePage from "./pages/HomePage";
//import LoginPage from "./pages/LoginPage";

//import Dashboard from "./pages/Dashboard";
//import TasksPage from "./pages/TasksPage";
//import GroupsPage from "./pages/GroupsPage";

import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
    //Hero (Swap the App path after development)
    {
        path: "/app",
        Component: HeroLayout,
        children: [
            { index: true, element: <h1>Hero Page</h1> }
        ],
    },

    //App (Swap the Hero path after development)
    {
        path: "/",
        Component: AppLayout,
        children: [
            { index: true, element: <HomePage /> }
        ],
    },

    //NotFound
    {
        path: "*",
        Component:NotFound,
    },
]);