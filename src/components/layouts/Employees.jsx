import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, ButtonGroup, Select, SelectItem } from "@heroui/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/react";
import { Form, Input, Button } from "@heroui/react";
import { Employee_context } from "../Context";
import NotFoundIcon from "../Images/not-found.png";
import Header from '../Header';
import { addToast } from "@heroui/toast";

function Employees() {
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

 
    const [newEmployee, setNewEmployee] = useState({ name: "", id: "", department: "", jobTitle: "", salary: "", JobType: "" });
    const JobType = ['Manager','Assistant','Admin','Worker','Employee'];
    
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Employees component must be wrapped within a ContextProvider");
    }
    const { employees, setEmployees, departments, setDepartments } = context;

  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (
            !newEmployee.name ||
            !newEmployee.id ||
            !newEmployee.jobTitle ||
            !newEmployee.salary
        ) {
            alert("Please fill out all required fields.");
            return; // Stop submission if validation fails
        }
        setEmployees((prev) => [...prev, newEmployee]);
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

    return ( 
        <motion.div className="p-2 flex flex-col gap-2 grow "
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        >
        <Header title="Employees"/>
    {employees.length !== 0 ? ( <Button color="primary" onPress={onOpen}>Add Employee</Button>) : null}
      
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Add Employee</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <Input isRequired label="Employee Name" type="text" name="name" onChange={handleInputChange} />
                                        <Input isRequired label="ID Number" type="text" name="id"  onChange={handleInputChange} />
                                        <Select
                                          label="Job Post"
                                          name="JobType"
                                          placeholder="Select Job Post"
                                        >
                                            {
                                                JobType.map((member,index)=>(
                                                <SelectItem key={index+1} value={member} onPress={() => setNewEmployee((prev) => ({ ...prev, JobType: member }))} >
                                                    {member}
                                                </SelectItem>
                                                ))
                                            }
                                        </Select>
                                        <Input onChange={handleInputChange} label="Email" name="Email"/>
                                        <Input onChange={handleInputChange} label="Tel" name="Tel"/>
                                        <Select
                                            label="Department"
                                            name="department"
                                            placeholder="Select Department"
                                        >
                                            {departments.map((department) => (
                                                <SelectItem key={department.Name} value={department.Name} onPress={() => setNewEmployee((prev) => ({ ...prev, department: department.Name }))} >
                                                    {department.Name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Input isRequired label="Job Title" type="text" name="jobTitle" onChange={handleInputChange} />
                                        <Input isRequired label="Salary" type="number" name="salary" onChange={handleInputChange} />
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <ButtonGroup>
                                        <Button color="primary" variant="flat"><Link to="/departments">Departments</Link></Button>
                                        <Button color="danger" variant="flat" onPress={onClose}>Discard</Button>
                                        <Button color="primary" onPress={handleSubmit}>Submit</Button>
                                    </ButtonGroup>
                                </ModalFooter>
                                
                            </>
                        )}
                    </ModalContent>
                </Modal>
        {
        employees.length !== 0 ? (
            <motion.div className="p-2 rounded-3xl bg-slate-100">
              
                {employees.length !== 0 &&
                    <Table isStriped >
                        <TableHeader>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>Post</TableColumn>
                            <TableColumn>Salary</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {employees.map((employee, idx) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.name}</TableCell>
                                    <TableCell>{employee.department}</TableCell>
                                    <TableCell>{employee.JobType}</TableCell>
                                    <TableCell>{employee.salary}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
            </motion.div>
        ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
            <motion.img src={NotFoundIcon} alt="Not Found" className="h-[250px] w-[250px] mt-10" />
            <h1 className="mb-4 font-sans text-xl font-bold">No Employees Found</h1>
            <Button color="primary" variant="shadow" onPress={onOpen}>Add Employee</Button>
            </div>
        )
        }
        </motion.div>
    );
}

export default Employees;
