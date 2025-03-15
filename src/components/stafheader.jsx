import IconButton from '@mui/material/IconButton';
import ThreeLines from '../assets/icons/three.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

function StaffHeader({ title }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("/");

  const navItems = [
    { key: 1, path: "/staff-dashboard", title: "Staff Dashboard" },
    { key: 2, path: "/emp-tasks", title: "Employee tasks" },
    { key: 3, path: "/employee-leaves", title: "Employee Leaves" }
  ];

  const handlepath = (path) =>{
    setActiveTab(path);
    navigate(path);
  }
    return (
        <>
            <div className="h-14 w-full rounded-lg bg-slate-50 flex flex-row gap-1 items-center p-2">
                <div className='lg:hidden'>
                <IconButton aria-label="navigation" color="primary" onClick={() => onOpen()}>
                    <img className='h-8' src={ThreeLines} />
                </IconButton>
                </div>
                <p className="font-bold text-lg font-sans">{title}</p>
            </div>
            <Drawer isOpen={isOpen}  onClose={onClose} placement='left' size='xs'>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">navigate</DrawerHeader>
                            <DrawerBody>
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
                                    <p className='grow'></p>
                                    <Button className="w-full mb-4" color="danger" variant="flat" onPress={() => navigate("/")}>Log Out</Button>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default StaffHeader;
