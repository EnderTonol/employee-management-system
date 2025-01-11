import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, ButtonGroup, Select, SelectItem } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import { Form, Input, Button } from "@nextui-org/react";
import { Employee_context } from "../Context";
import NotFoundIcon from "../Images/not-found.png";

function Employees() {
    // Modal Control
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Employee Form State
    const [newEmployee, setNewEmployee] = useState({ name: "", id: "", department: "", jobTitle: "", salary: "" });

    // Context Access
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Employees component must be wrapped within a ContextProvider");
    }
    const { employees, setEmployees, departments, setDepartments } = context;

    // Employee Input Handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee((prev) => ({ ...prev, [name]: value }));
    };

    // Add Employee
    const handleSubmit = () => {
        setEmployees((prev) => [...prev, newEmployee]);
        onOpenChange(false); // Close the modal
    };

    return ( 
        <div>
        <motion.h1 className="text-xl font-sans font-bold mb-1">Employees</motion.h1>
        <Button color="primary" variant="shadow" onPress={onOpen}>Add Employee</Button>
        {/* Employee Modal */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Add Employee</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <Input isRequired label="Employee Name" type="text" name="name" placeholder="e.g. Abdullah" onChange={handleInputChange} />
                                        <Input isRequired label="ID Number" type="text" name="id" placeholder="e.g. 1I01" onChange={handleInputChange} />
                                        <Select
                                            label="Department"
                                            name="department"
                                            placeholder="Select Department"
                                        >
                                            {departments.map((department) => (
                                                <SelectItem key={department.name} value={department.name} onPress={() => setNewEmployee((prev) => ({ ...prev, department: department.name }))} >
                                                    {department.name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Input isRequired label="Job Title" type="text" name="jobTitle" placeholder="e.g. IT Assistant" onChange={handleInputChange} />
                                        <Input isRequired label="Salary" type="number" name="salary" placeholder="e.g. 10000" onChange={handleInputChange} />
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="ghost" onPress={onClose}>Discard</Button>
                                    <Button color="primary" onPress={handleSubmit}>Submit</Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
        {
        employees.length !== 0 ? (
            <motion.div className="m-2 rounded-3xl bg-slate-100 p-2">
                {/* Employee Table */}
                {employees.length !== 0 &&
                    <Table className="mt-3">
                        <TableHeader>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>Job Title</TableColumn>
                            <TableColumn>Salary</TableColumn>
                            <TableColumn>Action</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {employees.map((employee, idx) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.name}</TableCell>
                                    <TableCell>{employee.id}</TableCell>
                                    <TableCell>{employee.department}</TableCell>
                                    <TableCell>{employee.jobTitle}</TableCell>
                                    <TableCell>{employee.salary}</TableCell>
                                    <TableCell>
                                        <ButtonGroup>
                                            <Button onPress={() => setEmployees(employees.filter((item, index) => index !== idx))} color="danger">Delete</Button>
                                            <Button color="primary" variant="flat">Edit</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
            </motion.div>
        ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
            <motion.img src={NotFoundIcon} alt="Not Found" className="h-[250px] w-[250px] mt-10" />
            <h1 className="text-xl font-sans font-bold">No Employees Found</h1>
            </div>
        )
        }
        </div>
    );
}

export default Employees;
