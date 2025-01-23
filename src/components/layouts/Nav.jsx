import { Button,useDisclosure, Divider } from "@heroui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";

function Nav() {
  const [activeTab, setActiveTab] = useState("/");
  
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
      <Button color="primary" onPress={onOpen} className="absolute block lg:hidden top-2 left-2" size="sm"> = </Button>
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left" size="xs">

        <DrawerContent className="flex flex-col h-full gap-3 pt-5 pl-8 pr-10 ">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">EMS!!</DrawerHeader>
              <Divider />
              <DrawerBody>
              {navItems.map((item) => (
          <>
            <Button
              variant={activeTab === item.path ? "solid" : "bordered"}
              color={activeTab === item.path ? "primary" : "default"}
              onPress={() => setActiveTab(item.path)}
              className="w-full"
              >
              <Link className="w-full" to={item.path}>
                {item.title}
              </Link>
            </Button>
          </>
        ))}
              </DrawerBody>
              <Divider/>
              <DrawerFooter className="text-tiny">
                Developed by Quddus | © 2021 EMS All Rights Reserved
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </nav>
    </nav></>
  );
}

export default Nav;
