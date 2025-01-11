import { motion } from "framer-motion";
import { useEffect,useState } from "react";
import { Table,TableHeader,TableBody,TableColumn,TableRow,TableCell, Button, Chip } from "@nextui-org/react";
import NotFoundIcon from "../Images/not-found.png";
function EmployeesShow(){
    const [Employees,SetEmployees] = useState([]);

    useEffect(()=>{
      const fetchEmployees = JSON.parse(localStorage.getItem("Employees"));
      if(fetchEmployees){
        SetEmployees(fetchEmployees);
      }
    },[]);
    return(
        Employees.length !== 0 ? (
        <motion.div className="m-2 rounded-3xl bg-slate-100 p-2">
            <motion.div>
            <motion.h1 className="text-xl font-sans font-bold mb-1">Employees DataSets</motion.h1>
            <Chip color="primary" variant="solid" className="mb-2 font-mono">Total Employees: {Employees.length}</Chip>
            </motion.div>
            {(Employees.length != 0)? 
            (
            <Table className="mt-3">
                <TableHeader>
                    <TableColumn>S#</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Department</TableColumn>
                    <TableColumn>Job Title</TableColumn>
                    <TableColumn>Salary</TableColumn>
                </TableHeader>
                <TableBody>
                {
                    Employees.map((employee,index)=>(
                        <TableRow key={employee.id}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{employee.name}</TableCell>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>{employee.jobTitle}</TableCell>
                            <TableCell>{employee.salary}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
            ) : null
}
        </motion.div>
        ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
            <motion.img src={NotFoundIcon} alt="Not Found" className="h-[250px] w-[250px] mt-10" />
            <h1 className="text-xl font-sans font-bold">No Employees Found</h1>
            </div>
        )
    );
}
export default EmployeesShow;
