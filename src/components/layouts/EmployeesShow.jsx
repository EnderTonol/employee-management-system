import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader, Divider, Button, Chip } from "@heroui/react";
import { useContext } from "react";
import NotFoundIcon from "../Images/not-found.png";
import { Link } from "react-router-dom";
import { Employee_context } from "../Context";

function EmployeesShow() {
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Employees component must be wrapped within a ContextProvider");
    }
    const { employees, setEmployees } = context;

    return employees.length !== 0 ? (
        <motion.div className="p-2 m-2"
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        >
            <motion.div>
                <motion.h1 className="pl-20 mb-1 font-sans text-2xl font-bold text-left">
                    Employees DataSets
                </motion.h1>
                <Chip color="primary" variant="solid" className="mb-2 font-mono">
                    Total Employees: {employees.length}
                </Chip>
            </motion.div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {employees.map((employee, idx) => (
                    <Card key={idx} className="flex flex-col mb-4 w-[300px]">
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
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <p>Email: {employee.Email}</p>
                                <p>Tel: {employee.Tel}</p>
                            </div>
                            <Button
                                onPress={() =>
                                    setEmployees(employees.filter((_, index) => index !== idx))
                                }
                                color="danger"
                            >
                                Delete
                            </Button>
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
