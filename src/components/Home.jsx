import Nav from "./layouts/Nav";
import Dashboard from "./layouts/Dashboard";
import Employees from "./layouts/Employees";
import EmployeesShow from "./layouts/EmployeesShow";
import Departments from "./layouts/Departments";
import ManageEvents from "./layouts/Manage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Context";


function Home() {
    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout><Dashboard /></Layout>
        },
        {
            path: "/employees",
            element: <Layout><Employees /></Layout>
        },
        {
            path: "/employees-data",
            element: <Layout><EmployeesShow /></Layout>
        },
        {
            path: "/manage-events",
            element: <Layout><ManageEvents /></Layout>
        },
        {
            path: "/departments",
            element: <Layout><Departments /></Layout>
        }
    ]);

    return (
        <>
        <ContextProvider>
            <RouterProvider router={Routes} />
        </ContextProvider>
        </>
    );
}

const Layout = ({ children }) => (
    <div className="flex flex-row gap-2">
        <Nav />
        {children}
    </div>
);

export default Home;