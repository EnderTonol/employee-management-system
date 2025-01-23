import { motion } from "framer-motion";
import { Textarea, Card, CardHeader, CardBody, Divider, CardFooter, Chip } from "@heroui/react";
import { Button, Input } from "@heroui/react";
import {Accordion, AccordionItem} from "@heroui/react";
import { useState, useContext, } from "react";
import { Employee_context } from "../Context";
import DepIcon from "../Images/department.png";

function Departments(){
    const [newDepartment, setNewDepartment] = useState({Name: "", ManagerName: "", Tel: "", Email: "", Discription:""});

    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Departments component must be wrapped within a ContextProvider");
    }
    const {departments, setDepartments } = context;

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDepartment((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col h-full gap-2 p-2 grow">
            <motion.h1 className="pl-20 mb-1 font-sans text-2xl font-bold text-left">Departments</motion.h1>
            <Accordion variant="shadow" >
                <AccordionItem title="Add Department" >
                    <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 mb-4">
                <Input label="Department Name" name="Name" onChange={handleChange} />
                <Input label="Manager" name="ManagerName" onChange={handleChange} />
                <Input label="Tel" name="Tel" onChange={handleChange} />
                <Input label="Email" name="Email" onChange={handleChange} />
                <Textarea label="Description" name="Discription" onChange={handleChange} />
                <Button color="primary" onPress={() => setDepartments((prev)=> [...prev, newDepartment])}>
                    Add Department
                </Button>
            </div>
            <Card className="flex flex-col items-start justify-center p-2">
                                    <Chip color="warning" variant="dot" >Preview</Chip>
                                    <CardHeader className="flex flex-col items-start">
                                        <p className="font-medium text-large">Department Name</p>
                                        <p className="text-tiny">Manager Name</p>
                                    </CardHeader>
                                    <Divider/>
                                    <CardBody>
                                        <p>Discription;</p>
                                        <div className="p-2 rounded-md bg-slate-100 text-tiny">
                                            <p>......</p>
                                        </div> 
                                    </CardBody>
                                    <Divider/>
                                    <CardFooter className="flex flex-row justify-between">
                                        <div className="flex flex-col">
                                        <p>Email: emai@example.com</p>
                                        <p>Tel: {"(051) 2331244"}</p>
                                        </div>
                                        <Button color="danger" isDisabled>Delete</Button>
                                    </CardFooter>
                </Card></div>
            </AccordionItem>
            </Accordion>
            {departments.length !== 0 ? (
                <motion.div className="grid grid-cols-2 gap-2 p-2 rounded-3xl bg-slate-200">
                            {departments.map((dep, index) => (
                                <Card key={index + 1} className="flex flex-col">
                                    <CardHeader className="flex flex-col items-start">
                                        <p className="font-medium text-large">{dep.Name}</p>
                                        <p className="text-tiny">{dep.ManagerName}</p>
                                    </CardHeader>
                                    <Divider/>
                                    <CardBody>
                                        <p>Discription;</p>
                                        <div className="p-2 rounded-md bg-slate-100 text-tiny">
                                            <p>{dep.Discription}</p>
                                        </div> 
                                    </CardBody>
                                    <Divider/>
                                    <CardFooter className="flex flex-row justify-between">
                                        <div className="flex flex-col">
                                        <p>Email: {dep.Email}</p>
                                        <p>Tel: {dep.Tel}</p>
                                        </div>
                                        <Button onPress={()=>setDepartments(departments.filter((_,i)=> i !== index))} color="danger">Delete</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                </motion.div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <motion.img src={DepIcon} alt="Not Found" className="h-[250px] w-[250px] mt-10" />
                    <h1 className="font-sans text-xl font-bold">No Departments Found</h1>
                </div>
            )}
        </div>
    );
}

export default Departments;
