import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState, useContext } from 'react';
import { Employee_context } from '../Context';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Alert, Input } from '@heroui/react';
import Header from '../Header';

function DashBoard() {
    const [empSal, setEmpSal] = useState([]);
    const [empName, setEmpName] = useState([]);
    const [AmountEmp, setAmountEmp] = useState();
    const [meeting, setmeeting] = useState([]);
    const [netA, setNetA] = useState(0);



    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("DashBoard component must be wrapped within a ContextProvider");
    }
    const { employees, Meeting, departments, EmployeeLeaves, EmployeeStatus } = context;

    useEffect(() => {
        const fetchData = localStorage.getItem("Meeting");
        if (fetchData) {
            const FetchParsed = JSON.parse(fetchData);
            setmeeting(FetchParsed);
        }
    }, []);

    useEffect(() => {
        if (employees && employees.length > 0) {
            const salaries = employees.map(emp => Number(emp.salary) || 0); // Ensure numerical values
            const names = employees.map(emp => emp.name);

            setEmpSal(salaries);
            console.log("Salaries:", salaries);

            setEmpName(names);
            console.log("Names:", names);

            // Calculate total salary
            const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);

            // Format with commas
            const formattedSalary = totalSalary.toLocaleString();

            console.log("Formatted Salary:", formattedSalary); // Debugging
            setAmountEmp(formattedSalary);
        }
    }, [employees]);



    const settings = {
        departments: {
            width: 200,
            height: 200,
            value: departments.length
        },
        meeting: {
            width: 200,
            height: 200,
            value: Meeting.length
        },
        leaves: {
            width: 200,
            height: 200,
            value: EmployeeLeaves.length
        },
        totalstaf: {
            width: 200,
            height: 200,
            value: employees.length
        },
        tasks: {
            width: 200,
            height: 200,
            value: EmployeeStatus.length
        }

    };

    return (
        <>
            <div className='p-2 grow flex flex-col gap-2 bg-slate-300 h-full'>
                <Header title={"Dashboard"} />
                <div className='flex flex-col lg:flex-row gap-2 items-center '>
                    <div className='rounded-lg bg-slate-100 h-full flex flex-col items-center p-4 w-full lg:w-auto'>
                        <h1 className='text-xl font-bold'>Departments length</h1>
                        <Gauge
                            {...settings.departments}
                            cornerRadius="35%"
                            sx={(theme) => ({
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40,
                                },
                                [`& .${gaugeClasses.valueArc}`]: {
                                    fill: '#0f5fff',
                                },
                            })}
                        />
                    </div>
                    <div className='rounded-lg bg-slate-100 h-full flex flex-col items-center p-4 w-full lg:w-auto'>
                        <h1 className='text-xl font-bold'>Meetings left</h1>
                        <Gauge
                            {...settings.meeting}
                            cornerRadius="35%"
                            sx={(theme) => ({
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40
                                },
                                [`& .${gaugeClasses.valueArc}`]: {
                                    fill: '#ff8800',
                                },
                            })}
                        />
                    </div>
                    <div className='rounded-lg bg-slate-100 h-full grow flex flex-col  items-center justify-center p-4  w-full lg:w-auto lg:flex-row'>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-xl font-bold'>Employee Leaves</h1>
                            <Gauge
                                {...settings.leaves}
                                cornerRadius="35%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: (EmployeeLeaves.length >= 1) ? '#ff0011' : '#ff8800',
                                    },
                                })}
                            />
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-xl font-bold'>Employee Tasks</h1>
                            <Gauge
                                {...settings.tasks}
                                cornerRadius="35%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: (EmployeeStatus.length >= 1) ? '#ff0011' : '#ff8800',
                                    },
                                })}
                            />

                        </div>
                    </div>
                    <div className='rounded-lg bg-slate-100 h-full grow flex flex-col items-center p-4 w-full lg:w-auto'>
                        <h1 className='text-xl font-bold'>Total Employees</h1>
                        <Gauge
                            {...settings.totalstaf}
                            cornerRadius="35%"
                            sx={(theme) => ({
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40
                                },
                                [`& .${gaugeClasses.valueArc}`]: {
                                    fill: '#0f5fff',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-100 h-72">
                    <h1>Employee Salary Comparison</h1>
                    <BarChart xAxis={[{
                        scaleType: 'band',
                        data: empName,
                        colorMap: {
                            type: 'ordinal',
                            colors: ['#88c6ff', '#50a7ff', '#ffa00a', '#0f5fff', '#ffb832', '#0a4aeb']
                        }
                    }]} series={[{ data: empSal }]} height={250} borderRadius={8} />
                </div>
                <div className='w-full rounded-lg h-48 flex items-center gap-2 '>
                    <div className='bg-slate-100 rounded-lg h-full w-full p-3'>
                        <h1 className='text-3xl'>Rs{AmountEmp}</h1>
                        <Alert className='mt-2' title={`Orgnization must Require minimum ${AmountEmp} to pay Salary`} color='warning' variant='solid' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;
