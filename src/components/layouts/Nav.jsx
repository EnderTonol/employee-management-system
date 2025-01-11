import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button,Navbar,NavbarBrand,NavbarItem,NavbarContent,Image } from "@nextui-org/react";

function Logo(){
    return(
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
    )
}

function Nav(){
    return(
        <>
        <Navbar>
            <NavbarBrand >
                <Link to="/"><Logo/></Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <Button variant="shadow"><Link to="/">Home</Link></Button>
            <Button variant="shadow"><Link to="/employees">Manage Employees</Link></Button>
            <Button variant="shadow"><Link to="/EmpData">Employees Data</Link></Button>
            <Button variant="shadow"><Link to="/ManageEvents">Manage Events</Link></Button>
            <Button variant="shadow"><Link to="/departments">Departments</Link></Button>
        </NavbarContent>
        </Navbar>
        </>
    )
}
export default Nav;