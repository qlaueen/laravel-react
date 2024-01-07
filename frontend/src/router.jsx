import { createBrowserRouter } from "react-router-dom";
import Homepage from "./views/Guest/Homepage";
import Dashboard from "./views/Admin/Dashboard";
import Login from "./views/Guest/Login";
import NewProject from "./views/Admin/NewProject";
import NewCategory from "./views/Admin/NewCategory";
import GuestLayout from "./components/GuestLayout";
import AdminLayout from "./components/AdminLayout";
import Projects from "./views/Admin/Projects";
import Categories from "./views/Admin/Categories";
import AllProjects from "./views/Guest/AllProjects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'projects',
                element: <AllProjects />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout currentPath={location.pathname} />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'new-project',
                element: <NewProject />
            },
            {
                path: 'new-category',
                element: <NewCategory />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'categories',
                element: <Categories />
            }
        ]
    },
    {
        path: '*',
        element: <h1>404</h1>
    }
])

export default router