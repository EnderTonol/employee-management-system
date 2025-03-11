import { Button,useDisclosure, Divider,Image,Alert } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import Menu from '../Images/menu.png';
import emsLogo from "../Images/EMSlogo.jpg";
import { motion} from "framer-motion";
function Nav() {
  const [activeTab, setActiveTab] = useState("/");
  const navigate = useNavigate();

  const navItems = [
    { key: 1, path: "/dashboard", title: "Dashboard" },
    { key: 2, path: "/employees", title: "Employees" },
    { key: 3, path: "/employees-data", title: "Detail Employees" },
    { key: 4, path: "/meetings", title: "Meeting" },
    { key: 5, path: "/departments", title: "Departments" },
    { key: 6, path: "/assign-task", title: "Tasks" },
    { key: 7, path: "/Admin-employee-leaves", title: "Employee Leaves" }
  ];

  const handlepath = (path) =>{
    setActiveTab(path);
    navigate(path);
  }

  return (
    <>
    <nav className="flex w-52">
      <div className="fixed flex flex-col items-center justify-start w-auto h-full gap-3 pt-5 pl-6 pr-8 border-r-2 rounded bg-slrounded-md">
        <Image src={emsLogo} alt="emslogo" width={80}/>
        {navItems.map((item) => (
          <>
            <Button
              variant={activeTab === item.path ? "solid" : "bordered"}
              color={activeTab === item.path ? "primary" : "default"}
              onPress={() => handlepath(item.path)}
              className="w-full"
              >
                {item.title}
            </Button>
          </>
        ))}
    <p className="grow"></p>
    <Button className="w-full mb-4" color="danger" variant="flat" onPress={()=> navigate("/")}>Log Out</Button>
    </div>
    </nav></>
  );
}

export default Nav;
