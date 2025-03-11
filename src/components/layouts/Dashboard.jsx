import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState, useContext } from 'react';
import { Employee_context } from '../Context';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { SiAnswer } from 'react-icons/si';

function DashBoard() {
    const [empSal, setEmpSal] = useState([]);
    const [empName, setEmpName] = useState([]);
    const [AmountEmp, setAmountEmp] = useState();

    const [meeting, setmeeting] = useState([]);



    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("DashBoard component must be wrapped within a ContextProvider");
    }
    const { employees, Meeting, departments, EmployeeLeaves } = context;

    useEffect(() => {
        const fetchData = localStorage.getItem("Meeting");
        if (fetchData) {
            const FetchParsed = JSON.parse(fetchData);
            setmeeting(FetchParsed);
        }
    }, []);

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

    const settings = {
        departments: {
            width: 200,
            height: 200,
            value: departments.length == 0 ? 0 : departments.length + 1
        },
        meeting: {
            width: 200,
            height: 200,
            value: Meeting.length == 0 ? 0 : Meeting.length + 1
        },
        leaves: {
            width: 200,
            height: 200,
            value: EmployeeLeaves == 0 ? 0 : EmployeeLeaves.length + 1
        }
        
    };

    return (
        <div className='p-4 grow flex flex-col gap-2 bg-slate-300 h-svh'>
            <div className='flex flex-row gap-2 items-center w-full h-64'>
                <div className='rounded-lg bg-slate-100 h-full flex flex-col items-center p-4'>
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
                <div className='rounded-lg bg-slate-100 h-full flex flex-col items-center p-4'>
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
                <div className='rounded-lg bg-slate-100 h-full grow flex flex-col items-center p-4'>
                    <h1 className='text-xl font-bold'>Employee Leaves</h1>
                    <Gauge
                        {...settings.leaves}
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
            </div>
            <div className="w-full p-3 rounded-lg bg-slate-100 h-72">
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
        </div>
    );
}

export default DashBoard;
