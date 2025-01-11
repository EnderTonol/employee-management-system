import { motion } from "framer-motion";
import { Table, TableColumn, TableHeader, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button, Input,ButtonGroup } from "@nextui-org/react";
import { useEffect, useState, useContext } from "react";
import { Employee_context } from "../Context";
import DepIcon from "../Images/department.png";

function Departments() {
    const [newDepartment, setNewDepartment] = useState([]);
    
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Departments component must be wrapped within a ContextProvider");
    }
    const { departments, setDepartments } = context;

    useEffect(()=>{
        const FetchDepartments = JSON.parse(localStorage.getItem("Departments"))|| [];
        if(FetchDepartments){
            setDepartments(FetchDepartments);
        }
    },[]);

    // Handle input change
    const handleChange = (e) => {
        setNewDepartment(e.target.value);
    };

    // Add a new department
    const addDepartment = () => {
        if (newDepartment.trim() !== "") {
            const newDep = {
                name: newDepartment,
                createdAt: new Date().toLocaleString(),
            };
            setDepartments((prev) => [...prev, newDep]);
            setNewDepartment(""); // Clear input
        }
    };

    const handleEdit = (id) => {
        const department = departments.find((dep) => dep.id === id);
        setNewDepartment(department.name);
    };

    return(
        <div className="m-2 rounded-md bg-slate-300 p-2 h-full">
            <motion.h1 className="text-xl font-bold mb-4">Departments</motion.h1>
            <div className="flex flex-row gap-2 mb-4">
                <Input
                    placeholder="Department Name"
                    value={newDepartment}
                    onChange={handleChange}
                />
                <Button color="primary" variant="shadow" onPress={addDepartment}>Add Department</Button>
            </div>
            {
            departments.length !== 0 ? (
            <motion.div>
            <Table>
                <TableHeader>
                    <TableColumn>Department Name</TableColumn>
                    <TableColumn>Created At</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {departments.map((dep, indx) => (
                        <TableRow key={indx}>
                            <TableCell>{dep.name}</TableCell>
                            <TableCell>{dep.createdAt}</TableCell>
                            <TableCell>
                                <ButtonGroup>
                                <Button color="primary" variant="shadow">
                                    Edit
                                </Button>
                                <Button color="danger" variant="shadow" onPress={() => setDepartments((prev)=> prev.filter((_, idx) => idx !== indx))}>Delete</Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </motion.div>
        
    ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.img src={DepIcon} alt="Not Found" className="h-[250px] w-[250px] mt-10" />
        <h1 className="text-xl font-sans font-bold">No Departments Found</h1>
        </div>
    )
}
</div>
);
}



export default Departments;
