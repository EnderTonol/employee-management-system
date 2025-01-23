import ReactApexChart from 'react-apexcharts';
import { motion } from 'framer-motion';
import { useEffect, useState, useContext } from 'react';
import { Employee_context } from '../Context';
import { Table, TableColumn,TableHeader,TableBody,TableRow,TableCell, Button, Input, Textarea, Calendar, Alert, Link } from "@heroui/react";
import { Modal, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalContent } from "@heroui/react";
import {Image} from "@heroui/image";
import NoResults from '../Images/noFoundR.jpg'
import {today, getLocalTimeZone} from "@internationalized/date";
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

    //Meeting Data
    const [meeting,setmeeting] = useState([]);

    
    //Modal control
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

   
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("DashBoard component must be wrapped within a ContextProvider");
    }
    const { employees, departments, Meeting } = context;

    useEffect(()=>{
        const fetchData = localStorage.getItem("Meeting");
        if(fetchData){
            const FetchParsed = JSON.parse(fetchData);
            setmeeting(FetchParsed);
        }
    },[Meeting]);

    useEffect(()=>{
        const fetchData = localStorage.getItem("Meeting");
        if(fetchData){
            const FetchParsed = JSON.parse(fetchData);
            setmeeting(FetchParsed);
        }
    },[]);
    
    useEffect(() => {
        if (employees && employees.length > 0) {
            const salaries = employees.map(emp => emp.salary || 0);
            const names = employees.map(emp => emp.name);
            setEmpSal(salaries);
            console.log(salaries);
            setEmpName(names);
            console.log(names);
            setAmountEmp(...(salaries + salaries[1]));
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

    return (
        <div className='p-2 grow'>
            <motion.div className="flex flex-row justify-between p-2 " initial={{ x: -10, opacity: 0 }} animate={{x:0, opacity: 1}} transition={{type: "easeIn", duration: 0.3}}>
                <h4 className="pl-20 font-sans text-2xl font-bold text-gray-950">Admin DashBoard</h4>
               {(IndName.length > 0)? ( <Button color="primary" variant="flat" onPress={onOpen} className="mt-2 font-sans tracking-wide"><img src={EditIcon} alt="Edit" className="h-[20px] w-[20px]" />Edit Data</Button>) : null}
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
                <Input label="Organization Name" onChange={(e) => setNewIndName(e.target.value)} />
               <Textarea label="Discription" placeholder="Example: A Software Company that develops software" onChange={(e) => setNewDisc(e.target.value)} />
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
            </motion.div>
            <motion.div initial={{ x: -10, opacity: 0 }} animate={{x:0, opacity: 1}} transition={{type: "easeIn", duration: 0.3}} className="flex flex-col w-full gap-2 lg:flex-row">
                <div className="w-full p-3 rounded-md bg-slate-300">
                    <h2 className="font-sans text-xl font-bold">{(IndName.length > 0)? IndName : null }</h2>
                    <h3 className="font-sans text-lg">{(IndName.length && Disc.length > 0)? "Industry Bio" : null }</h3>
                    <p className='text-sm'>{(Disc.length > 0)? Disc :  <div className='flex flex-col items-center justify-center h-full gap-2'>
                    {(IndName.length > 0)? null : (<div className='flex flex-col items-center justify-center h-full font-mono'><Image src={NoResults} alt='NO RESULTS' width={200} />NO RESULTS FOUND!</div>)}
                    {(IndName.length > 0)? null : (<Button color="primary" size='md' onPress={onOpen}>Set Data</Button>)}
                    </div>}</p>
                </div>
                <div className="w-full p-3 rounded-md bg-slate-300">
                    <h1>Employee Salary Comparison</h1>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={250} width="100%" />
                </div>
            </motion.div>
            <motion.div initial={{ x: -10, opacity: 0 }} animate={{x:0, opacity: 1}} transition={{type: "easeIn", duration: 0.3}} className="flex flex-col w-full gap-2 mt-3 lg:flex-row">
                <div className="bg-slate-300 rounded-md p-2 w-full h-[300px]">
                    <h1 className='mb-2 font-sans text-xl font-bold'>Meetings</h1>
                {
                        (meeting.length > 0)?
                    (
                    <Table isStriped>
                        <TableHeader>
                            <TableColumn>Sn#</TableColumn>
                            <TableColumn>Meeting</TableColumn>
                            <TableColumn>Date</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {
                            meeting.map((itm,index)=>(
                                <TableRow key={index+1}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{itm.MeetingName}</TableCell>
                                    <TableCell>{itm.MeetingDate}</TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                    ) : <div className='flex flex-col items-center justify-center h-full font-mono'><Image src={NoResults} alt='NO RESULTS' width={200} />NO RESULTS FOUND!</div>
                }
                </div>
                <div className="bg-slate-300 rounded-md p-2 w-full overflow-y-auto h-[300px]">
                    <h1 className="mb-2 font-sans text-xl font-bold">Departments</h1>
                    {
                    (Departments.length > 0)? (
                    <Table>
                        <TableHeader>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>Created On</TableColumn>
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
                    ) : (<div className='flex flex-col items-center justify-center h-full font-mono'><Image src={NoResults} alt='NO RESULTS' width={200} />NO RESULTS FOUND!</div>)
                }
                </div>
                <div className="bg-slate-300 rounded-md p-3 w-auto h-[300px]">
                <Calendar isReadOnly aria-label="Date (Read Only)" value={today(getLocalTimeZone())} />
                </div>
            </motion.div>
                <div className='flex items-center w-full h-auto p-4 mt-2 font-mono rounded-md bg-slate-300'>
                © 2021 EMS All Rights Reserved | Developed by&nbsp;<Link href='https://github.com/EnderTonol'>Abdul Quddus</Link>
                </div>
        </div>
    );
}

export default DashBoard;
