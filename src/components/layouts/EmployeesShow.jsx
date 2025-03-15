import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader, Divider, Button, Chip, Form, ButtonGroup } from "@heroui/react";
import { useContext, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Select,
    SelectItem,
    Input
} from "@heroui/react";
import NotFoundIcon from "../Images/not-found.png";
import { Link } from "react-router-dom";
import { Employee_context } from "../Context";
import Header from '../Header';
import { addToast } from "@heroui/toast";

function EmployeesShow() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [editIndex, setEditIndex] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        id: "",
        department: "",
        jobTitle: "",
        salary: "",
        JobType: "",
        Email: "",
        Tel: ""
    });
    
    const JobType = ['Manager','Assistant','Admin','Worker','Employee'];
    const context = useContext(Employee_context);
    
    if (!context) {
        throw new Error("Employees component must be wrapped within a ContextProvider");
    }
    
    const { employees, setEmployees, departments } = context;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (editIndex !== null) {
            if (
                !newEmployee.name ||
                !newEmployee.id ||
                !newEmployee.jobTitle ||
                !newEmployee.salary
            ) {
                alert("Please fill out all required fields.");
                return; // Stop submission if validation fails
            }
            setEmployees(prev => {
                const updated = [...prev];
                updated[editIndex] = newEmployee;
                addToast({
                    title: "Employee Updated",  
                    description: "Data transmitted",
                    timeout: 2000,
                    shouldShowTimeoutProgress: true,
                    variant: "bordered",
                    color: "success"
                  });
                return updated;
            });
            
        }
        if (
            !newEmployee.name ||
            !newEmployee.id ||
            !newEmployee.jobTitle ||
            !newEmployee.salary
        ) {
            alert("Please fill out all required fields.");
            return; // Stop Kare Ga Submition ko
        }
            
            setNewEmployee({
                name: "",
                id: "",
                department: "",
                jobTitle: "",
                salary: "",
                JobType: "",
                Email: "",
                Tel: ""
            });
            setEditIndex(null);
            addToast({
                title: "Employee Added",
                description: "Data transmitted",
                timeout: 2000,
                shouldShowTimeoutProgress: true,
                variant: "bordered",
                color: "success"
              });
            onOpenChange(false);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewEmployee(employees[index]);
        addToast({
            title: "Employee Updated",
            description: "Data transmitted",
            timeout: 2000,
            shouldShowTimeoutProgress: true,
            variant: "bordered",
            color: "success"
          });
        onOpen();
    };

    return employees.length !== 0 ? (
        <motion.div className="p-2 grow bg-slate-300 flex flex-col gap-2 h-full"
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
        >
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                Edit Employee
                            </ModalHeader>
                            <ModalBody>
                                <Form className="flex flex-col gap-2">
                                    <Input label="Employee Name" name="name" 
                                        value={newEmployee.name} onChange={handleInputChange} />
                                    <Input label="ID Number" name="id"  
                                        value={newEmployee.id} onChange={handleInputChange} />
                                    <Select
                                        label="Job Type"
                                        placeholder="Select Job Type"
                                        selectedKeys={newEmployee.JobType ? [newEmployee.JobType] : []}
                                        onSelectionChange={(keys) => {
                                            const keyArray = Array.from(keys);
                                            setNewEmployee(prev => ({ ...prev, JobType: keyArray[0] }));
                                        }}
                                    >
                                        {JobType.map((member) => (
                                            <SelectItem key={member} value={member}>
                                                {member}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Input label="Email" name="Email" 
                                        value={newEmployee.Email} onChange={handleInputChange} />
                                    <Input label="Tel" name="Tel" 
                                        value={newEmployee.Tel} onChange={handleInputChange} />
                                    <Select
                                        label="Department"
                                        placeholder="Select Department"
                                        selectedKeys={newEmployee.department ? [newEmployee.department] : []}
                                        onSelectionChange={(keys) => {
                                            const keyArray = Array.from(keys);
                                            setNewEmployee(prev => ({ ...prev, department: keyArray[0] }));
                                        }}
                                    >
                                        {departments.map((department) => (
                                            <SelectItem key={department.Name} value={department.Name}>
                                                {department.Name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Input label="Job Title" name="jobTitle" 
                                        value={newEmployee.jobTitle} onChange={handleInputChange} />
                                    <Input label="Salary" type="number" name="salary" 
                                        value={newEmployee.salary} onChange={handleInputChange} />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <ButtonGroup>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={handleSubmit}>
                                    Save Changes
                                </Button>
                                </ButtonGroup>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Header title="Employees Detail"/>
            <Button className="w-full" color="primary" onPress={onOpen}>Add Employee</Button>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {employees.map((employee, idx) => (
                    <Card key={idx} className="flex flex-col">
                        <CardHeader className="flex flex-col items-start">
                            <p className="text-sm">{"#" + (idx + 1)}</p>
                            <p className="text-lg font-medium">{employee.name}</p>
                            <p className="text-xs">ID: {employee.id}</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Department: {employee.department}</p>
                            <p>Job Title: {employee.jobTitle}</p>
                            <p>Post: {employee.JobType}</p>
                            <p>Salary: {employee.salary}</p>
                            <div className="flex flex-col">
                                <p>Email: {employee.Email}</p>
                                <p>Tel: {employee.Tel}</p>
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex">
                            <p className="grow"></p>
                                <ButtonGroup>
                                <Button color="primary" onPress={() => handleEdit(idx)}>
                                    Edit
                                </Button>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={() => {
                                        setEmployees(employees.filter((_, index) => index !== idx));
                                        addToast({
                                            title: "Employee Deleted",
                                            description: "Data transmitted",
                                            timeout: 2000,
                                            shouldShowTimeoutProgress: true,
                                            variant: "bordered",
                                            color: "success"
                                        });
                                    }}
                                >
                                    Delete
                                </Button>
                                </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </motion.div>
    ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <motion.img
                src={NotFoundIcon}
                alt="Not Found"
                className="h-[250px] w-[250px] mt-10"
            />
            <h1 className="font-sans text-xl font-bold">No Employees Found</h1>
            <Button variant="shadow" color="primary" className="mt-3">
                <Link to="/employees">Insert Employee Data</Link>
            </Button>
        </div>
    );
}

export default EmployeesShow;