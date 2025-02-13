import ReactApexChart from 'react-apexcharts';
import { motion } from 'framer-motion';
import { useEffect, useState, useContext } from 'react';
import { Employee_context } from '../Context';
import { Table, TableColumn,TableHeader,TableBody,TableRow,TableCell, Button, Input, Textarea, Calendar, Link } from "@heroui/react";
import { Modal, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalContent } from "@heroui/react";
import {Image} from "@heroui/image";
import NoResults from '../Images/noFoundR.jpg'
import {today, getLocalTimeZone} from "@internationalized/date";
import EditIcon from "../Images/edit.png";
import Table1 from "./Table";

function DashBoard() {

    const [empSal, setEmpSal] = useState([]);
    const [empName, setEmpName] = useState([]);
    const [AmountEmp, setAmountEmp] = useState();

   
    const [meeting,setmeeting] = useState([]);
    const [INDname,setINDname] = useState("");
    const [DiscINF,setDiscINF] = useState("");
    
   
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

   
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("DashBoard component must be wrapped within a ContextProvider");
    }
    const { employees, Meeting,  indname, setIndname, disc, setDisc } = context;

    

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
               {(indname.length > 0)? ( <Button color="primary" variant="flat" onPress={onOpen} className="mt-2 font-sans tracking-wide"><img src={EditIcon} alt="Edit" className="h-[20px] w-[20px]" />Edit Data</Button>) : null}
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
                <Input label="Organization Name" onChange={(e) => setINDname(e.target.value)} />
               <Textarea label="Discription" placeholder="Example: A Software Company that develops software" onChange={(e) => setDiscINF(e.target.value)} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Discard
                </Button>
                <Button color="primary" onPress={() => {onClose(); setIndname(INDname); setDisc(DiscINF);}} > 
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
                    <h2 className="font-sans text-xl font-bold">{(indname.length > 0)? indname : null }</h2>
                    <h3 className="font-sans text-lg">{(indname.length && disc.length > 0)? "Industry Bio" : null }</h3>
                    <p className='text-sm'>{(disc.length > 0)? disc :  <div className='flex flex-col items-center justify-center h-full gap-2'>
                    {(indname.length > 0)? null : (<div className='z-0 flex flex-col items-center justify-center h-full font-mono'><Image src={NoResults} alt='NO RESULTS' width={200} />NO RESULTS FOUND!</div>)}
                    {(indname.length > 0)? null : (<Button color="primary" size='md' onPress={onOpen}>Set Data</Button>)}
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
                        (Meeting.length > 0)?
                    (
                    <Table isStriped>
                        <TableHeader>
                            <TableColumn>Sn#</TableColumn>
                            <TableColumn>Meeting</TableColumn>
                            <TableColumn>Date</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {
                            Meeting.map((itm,index)=>(
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
                <Table1/>
                <div className="bg-slate-300 rounded-md p-3 w-auto h-[300px]">
                <Calendar isReadOnly aria-label="Date (Read Only)" value={today(getLocalTimeZone())} />
                </div>
            </motion.div>
                <div className='flex flex-row gap-2 w-full h-auto p-4 mt-2 font-mono rounded-md bg-slate-300'>
                © 2021 EMS All Rights Reserved | Developed by&nbsp;Abdul Quddus |&nbsp;<Link href='https://github.com/EnderTonol'>Github</Link> This Project Is Fully Open-Source
                </div>
        </div>
    );
}

export default DashBoard;
