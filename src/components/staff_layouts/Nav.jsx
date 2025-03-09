import { Button,useDisclosure, Divider,Image,Alert } from "@heroui/react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import Menu from '../Images/menu.png';
import emsLogo from "../Images/EMSlogo.jpg";
import { motion} from "framer-motion";
function StafNav(){

    const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("/");

  const navItems = [
    { key: 1, path: "/staff-dashboard", title: "Dashboard" },
    { key: 2, path: "/emp-tasks", title: "Assigned Tasks" }
  ];
  
  const handlepath = (path) =>{
    setActiveTab(path);
    navigate(path);
  }
  return (
    <>
    <nav>
    <nav className="hidden w-52 lg:flex">
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
    
    
    </nav>
    </nav></>
  );



}
export default StafNav;