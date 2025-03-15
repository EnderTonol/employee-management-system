import { motion } from "framer-motion";
import { Textarea, Card, CardHeader, CardBody, Divider, CardFooter, Chip, ButtonGroup } from "@heroui/react";
import { Button, Input } from "@heroui/react";
import {Accordion, AccordionItem} from "@heroui/react";
import { useState, useContext } from "react";
import { Employee_context } from "../Context";
import DepIcon from "../Images/department.png";
import Header from '../Header';
import { addToast } from "@heroui/toast";

function Departments() {
    const [newDepartment, setNewDepartment] = useState({ Name: "", ManagerName: "", Tel: "", Email: "", Discription: "" });
    const [editIndex, setEditIndex] = useState(null);
    const [expandedKey, setExpandedKey] = useState(null);

    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Departments component must be wrapped within a ContextProvider");
    }
    const { departments, setDepartments } = context;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDepartment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!newDepartment.Name || !newDepartment.ManagerName || !newDepartment.Tel || !newDepartment.Email || !newDepartment.Discription) {
            addToast({
                title: "Warning",
                description: "All fields are required.",
                timeout: 2000,
                shouldShowTimeoutProgress: true,
                variant: "bordered",
                color: "warning"
              });
            return;
        }
    
        if (editIndex !== null) {
            setDepartments(prev => {
                const updated = [...prev];
                updated[editIndex] = newDepartment;
                addToast({
                    title: "Department Updated",
                    description: "Data transmitted",
                    timeout: 2000,
                    shouldShowTimeoutProgress: true,
                    variant: "bordered",
                    color: "success"
                  });
                return updated;
            });
            setEditIndex(null);
        } else {
            setDepartments(prev => [...prev, newDepartment]);
            addToast({
                title: "Department Added",
                description: "Data transmitted",
                timeout: 2000,
                shouldShowTimeoutProgress: true,
                variant: "bordered",
                color: "success"
              });
        }
        setNewDepartment({ Name: "", ManagerName: "", Tel: "", Email: "", Discription: "" });
        setExpandedKey(null);
    };
    

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewDepartment(departments[index]);
        setExpandedKey("add-edit-department");
    };

    return(
        <motion.div className="flex flex-col h-full gap-2 p-2 grow bg-slate-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Header title="Departments" />
            <Accordion
                variant="shadow"
                selectedKeys={expandedKey ? new Set([expandedKey]) : new Set()}
                onSelectionChange={(keys) => {
                    const keyArray = Array.from(keys);
                    setExpandedKey(keyArray.length ? keyArray[0] : null);
                }}
            >
                <AccordionItem key="add-edit-department" title={editIndex !== null ? "Edit Department" : "Add Department"}>
                    <div className="flex gap-2 lg:flex-row flex-col">
                        <div className="flex flex-col gap-2 mb-4 grow">
                            <Input label="Department Name" name="Name" value={newDepartment.Name} onChange={handleChange} />
                            <Input label="Manager" name="ManagerName" value={newDepartment.ManagerName} onChange={handleChange} />
                            <Input label="Tel" name="Tel" value={newDepartment.Tel} onChange={handleChange} />
                            <Input label="Email" name="Email" value={newDepartment.Email} onChange={handleChange} />
                            <Textarea label="Description" name="Discription" value={newDepartment.Discription} onChange={handleChange} />
                            <div className="flex gap-2">
                                <Button color="primary" onPress={handleSubmit}>
                                    {editIndex !== null ? "Save Changes" : "Add Department"}
                                </Button>
                                {editIndex !== null && (
                                    <Button onPress={() => {
                                        setEditIndex(null);
                                        setNewDepartment({ Name: "", ManagerName: "", Tel: "", Email: "", Discription: "" });
                                        setExpandedKey(null);
                                    }}>Cancel</Button>
                                )}
                            </div>
                        </div>
                        <Card className="hidden lg:flex flex-col items-start justify-center p-2 grow">
                            <Chip color="warning" variant="dot">Preview</Chip>
                            <CardHeader className="flex flex-col items-start">
                                <p className="font-medium text-large">{newDepartment.Name || "Department Name"}</p>
                                <p className="text-tiny">{newDepartment.ManagerName || "Manager Name"}</p>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p>Description</p>
                                <div className="p-2 rounded-md bg-slate-100 text-tiny">
                                    <p>{newDepartment.Discription || "......"}</p>
                                </div>
                            </CardBody>
                            <Divider />
                            <CardFooter className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <p>Email: {newDepartment.Email || "email@example.com"}</p>
                                    <p>Tel: {newDepartment.Tel || "(051) 2331244"}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </AccordionItem>
            </Accordion>
            {departments.length !== 0 ? (
                <motion.div className="grid grid-cols-2 gap-2 p-2 rounded-3xl bg-slate-200">
                    {departments.map((dep, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader className="flex flex-col items-start">
                                <p className="font-medium text-large">{dep.Name}</p>
                                <p className="text-tiny">{dep.ManagerName}</p>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p>Description</p>
                                <div className="p-2 rounded-md bg-slate-100 text-tiny">
                                    <p>{dep.Discription}</p>
                                </div>
                            </CardBody>
                            <Divider />
                            <CardFooter className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <p>Email: {dep.Email}</p>
                                    <p>Tel: {dep.Tel}</p>
                                </div>
                                <ButtonGroup>
                                    <Button onPress={() => handleEdit(index)} color="primary">Edit</Button>
                                    <Button onPress={() =>{
                                        setDepartments(departments.filter((_, i) => i !== index));
                                        addToast({
                                            title: "Department Deleted",
                                            description: "Data transmitted",
                                            timeout: 3000,
                                            shouldShowTimeoutProgress: true,
                                            variant: "bordered",
                                            color: "success"
                                          });
                                        }} variant="flat" color="danger">Delete</Button>
                                </ButtonGroup>
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
        </motion.div>
    );
}

export default Departments;