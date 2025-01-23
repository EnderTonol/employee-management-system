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
    <>
    <div className="flex flex-col items-center justify-center w-full h-full mt-12 lg:hidden"> 
           <p className="font-sans text-center font-2xl">YOU NEED LAGER SCREEN!</p>
           <p className="font-mono text-tiny">FOR RUN SITE!!! THAN YOUR DEVICE</p>
    </div>
    <div className="hidden lg:flex">
        <Nav />
        {children}
    </div>
    </>
);

export default Home;