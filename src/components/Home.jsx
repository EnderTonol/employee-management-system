import React from "react";
const Nav = React.lazy(()=> import('./layouts/Nav'))
const Dashboard = React.lazy(()=> import('./layouts/Dashboard'))
const Employees = React.lazy(()=> import('./layouts/Employees'))
const EmployeesShow = React.lazy(()=> import('./layouts/EmployeesShow'))
const Departments = React.lazy(()=> import('./layouts/Departments'))
const ManageEvents = React.lazy(()=> import('./layouts/Manage'))
const Login = React.lazy(()=> import('./loginPge'))
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Context";


function Home() {
    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout><Login /></Layout>
        },
        {
            path: "/dashboard",
            element: <Layout><Nav /><Dashboard /></Layout>
        },
        {
            path: "/employees",
            element: <Layout><Nav /><Employees /></Layout>
        },
        {
            path: "/employees-data",
            element: <Layout><Nav /><EmployeesShow /></Layout>
        },
        {
            path: "/manage-events",
            element: <Layout><Nav /><ManageEvents /></Layout>
        },
        {
            path: "/departments",
            element: <Layout><Nav /><Departments /></Layout>
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
    {/* <div className="flex flex-col items-center justify-center w-full h-full mt-12 lg:hidden"> 
           <p className="font-sans text-center font-3xl">YOU NEED LARGER SCREEN!</p>
           <p className="font-mono text-medium">FOR RUN SITE!!! THAN YOUR DEVICE</p>
    </div> */}
    <div className="hidden lg:flex">
        {children}
    </div>
    </>
);

export default Home;