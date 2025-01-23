import React from "react";
const Nav = React.lazy(()=> import('./layouts/Nav'))
const Dashboard = React.lazy(()=> import('./layouts/Dashboard'))
const Employees = React.lazy(()=> import('./layouts/Employees'))
const EmployeesShow = React.lazy(()=> import('./layouts/EmployeesShow'))
const Departments = React.lazy(()=> import('./layouts/Departments'))
const ManageEvents = React.lazy(()=> import('./layouts/Manage'))
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