import { Button,useDisclosure, Divider,Image } from "@heroui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import Menu from '../Images/menu.png';
import emsLogo from "../Images/EMSlogo.jpg";
import { motion} from "framer-motion";
function Nav() {
  const [activeTab, setActiveTab] = useState("/");
  const [show, setShow] = useState(false);
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const navItems = [
    { key: 1, path: "/", title: "Dashboard" },
    { key: 2, path: "/employees", title: "Employees" },
    { key: 3, path: "/employees-data", title: "Manage" },
    { key: 4, path: "/manage-events", title: "Event Manager" },
    { key: 5, path: "/departments", title: "Departments" },
  ];

  return (
    <>
    <nav>
    <nav className="hidden w-52 lg:flex">
      <div className="fixed flex flex-col items-center justify-start w-auto h-full gap-3 pt-5 pl-8 pr-10 border-r-2 rounded bg-slrounded-md">
        <Image src={emsLogo} alt="emslogo" width={80}/>
        {navItems.map((item) => (
          <>
            <Button
              variant={activeTab === item.path ? "solid" : "bordered"}
              color={activeTab === item.path ? "primary" : "default"}
              onPress={() => setActiveTab(item.path)}
              className="w-full"
              >
              <Link to={item.path}>
                {item.title}
              </Link>
            </Button>
          </>
        ))}
    </div>
    </nav>
    <nav className="absolute top-0 left-0">  
      <Button onPress={()=> setShow(!show)} color="primary" className="absolute flex items-center justify-center lg:hidden top-2 left-4" size="sm" variant="bordered"><img src={Menu} alt="Menu" className="w-4"/> </Button>
      <motion.div 
      initial={{x:-300}}
      animate={(show)? {x:0}:{x:-300}}
      transition={{type: "easeIn", duration: 0.3}}
      className="fixed z-10 flex flex-col items-center justify-start w-auto h-full gap-3 pt-5 pl-8 pr-10 border-r-2 rounded bg-slrounded-md bg-slate-200">
        <Button onPress={()=> setShow(false)} color="danger" className="absolute w-auto top-2 right-2" size="sm" variant="flat">X</Button>
        <Image className="mt-7" src={emsLogo} alt="emslogo" width={80}/>
        {navItems.map((item) => (
          <>
            <Button
              variant={activeTab === item.path ? "solid" : "bordered"}
              color={activeTab === item.path ? "primary" : "default"}
              onPress={() => {setActiveTab(item.path); setShow(false)}}
              className="w-full"
              >
              <Link to={item.path}>
                {item.title}
              </Link>
            </Button>
          </>
        ))}
    </motion.div>
    </nav>
    </nav></>
  );
}

export default Nav;
