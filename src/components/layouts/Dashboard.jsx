import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useEffect, useState, useContext } from 'react';
import { Employee_context } from '../Context';
import { Table, TableColumn,TableHeader,TableBody,TableRow,TableCell, Button, Input, Textarea } from '@nextui-org/react';
import { Modal, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalContent } from '@nextui-org/react';
import EditIcon from "../Images/edit.png";

function DashBoard() {
    //Employee Salary
    const [empSal, setEmpSal] = useState([]);
    const [empName, setEmpName] = useState([]);
    const [Departments, setDepartments] = useState([]);
    const [AmountEmp, setAmountEmp] = useState();

    //Industry Name
    const [IndName,setIndName] = useState("");
    const [newIndName,setNewIndName] = useState("");

    //Industry Bio
    const [Disc,setDisc] = useState("");
    const [newDisc,setNewDisc] = useState("");

    //Modal control
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

   
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("DashBoard component must be wrapped within a ContextProvider");
    }
    const { employees, departments } = context;


    
    useEffect(() => {
        if (employees && employees.length > 0) {
            const salaries = employees.map(emp => emp.salary || 0);
            const names = employees.map(emp => emp.name);
            setEmpSal(salaries);
            console.log(salaries);
            setEmpName(names);
            console.log(names);
            setAmountEmp(...salaries + salaries[1]);
        }
    }, [employees]);

    useEffect(() => {
        if (departments && departments.length > 0) {
            setDepartments(departments);
        }
    }, [departments]);

    
    const chartOptions = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: empName,
        },
    };

    const chartSeries = [
        {
            name: 'Employee Salary',
            data: empSal,
        },
    ];

    const chartOptionsPie = {
      labels: Departments.map(department => department.name),
      legend: {
          position: 'bottom'
      },
      stroke: {
        show: false // This removes the white outline
    }
  };

  const chartSeriesPie = [40, 25, 20, 15];

    return (
        <div className="m-2">
            <div className="p-2 flex flex-row justify-between">
                <h1 className="text-3xl font-sans font-bold">Admin DashBoard</h1>
                <Button color="default" variant="shadow" onPress={onOpen} className="mt-2"><img src={EditIcon} alt="Edit" className="h-[20px] w-[20px]" />Edit Data</Button>
                <Modal
        backdrop="blur"
        placement='center'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
                {
                (onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Industry Bio</ModalHeader>
              <ModalBody>
                <Input placeholder="Industry Name" onChange={(e) => setNewIndName(e.target.value)} />
               <Textarea placeholder="Example: A Software Company that develops software" onChange={(e) => setNewDisc(e.target.value)} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Discard
                </Button>
                <Button color="primary" onPress={() => {onClose(); setDisc(newDisc); setIndName(newIndName);}} > 
                  Insert
                </Button>
              </ModalFooter>
            </>
          )}
          </ModalContent>
          </Modal>
            </div>
            <div className="flex flex-row w-full gap-2">
                <div className="bg-slate-300 rounded-md p-3 w-full">
                    <h2 className="text-xl font-sans font-bold">{IndName}</h2>
                    <h2 className="text-lg font-sans">Industry Bio</h2>
                    <p className='text-sm'>{Disc}</p>
                </div>
                <div className="bg-slate-300 rounded-md p-3 w-full">
                    <h1>Employee Salary Comparison</h1>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={250} width="100%" />
                </div>
            </div>

            <div className="flex flex-row w-full gap-2 mt-3">
                <div className="bg-slate-300 rounded-md p-3 w-full h-[310px]">
                    <h1 className="text-xl font-sans font-bold mb-2">OverAll Imrovements</h1>
                    <ReactApexChart options={chartOptionsPie} series={chartSeriesPie} type="donut" height={260} />
                </div>
                <div className="bg-slate-300 rounded-md p-2 w-full overflow-y-auto h-[310px]">
                    <h1 className="text-xl font-sans font-bold mb-2">Departments</h1>
                    <Table>
                        <TableHeader>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>Created At</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {
                                Departments.map((department, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{department.name}</TableCell>
                                        <TableCell>{department.createdAt}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
                <div className="bg-slate-300 rounded-md p-3 w-full h-[310px]">
                    <h1 className="text-xl font-sans font-bold mb-2">Net Profits</h1>
                    <h1 className="text-3xl font-mono font-bold">120,000$</h1>
                    <h1>Amount required to pay employees</h1>
                    <p>{AmountEmp}</p>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
