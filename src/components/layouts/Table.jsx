import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image, Divider } from '@heroui/react';
import { useState, useEffect, useContext } from 'react';
import { Employee_context } from '../Context';
import NoResults from '../Images/noFoundR.jpg';
function Table1(){
    const [Departments, setDepartments] = useState([]);

    const context = useContext(Employee_context);
    if (!context) {
            throw new Error("DashBoard component must be wrapped within a ContextProvider");
    }
    const { departments } = context;

    useEffect(() => {
        if (departments && departments.length > 0) {
            setDepartments(departments);
        }
    }, []);
    
    useEffect(() => {
            if (departments && departments.length > 0) {
                setDepartments(departments);
            }
        }, [departments]);
        
    return(
        <div className="w-full p-2 overflow-y-auto rounded-md bg-slate-300">
                    <h1 className="mb-2 font-bold">Departments</h1>
                    <Divider/>
                    {
                    (Departments.length > 0)? (
                    <Table isStriped className='mt-2'>
                        <TableHeader>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>Email</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {
                                Departments.map((department, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{department.Name}</TableCell>
                                        <TableCell>{department.Email}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    ) : (<div className='flex flex-col items-center justify-center h-full font-mono'><Image src={NoResults} alt='NO RESULTS' width={200} />NO RESULTS FOUND!</div>)
                }
                </div>
    )
}
export default Table1;