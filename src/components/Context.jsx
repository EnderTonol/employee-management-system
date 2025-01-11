import { createContext, useEffect, useState } from "react";

export const Employee_context = createContext();

export default function ContextProvider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [EmployeesName, setEmployeesName] = useState([]);
    const [Meeting,setMeeting] = useState([]);

    useEffect(() => {
        const FetchData = JSON.parse(localStorage.getItem("Employees"))|| [];
        const FetchDepartments = JSON.parse(localStorage.getItem("Departments"))|| [];
        const FetchMeeting = JSON.parse(localStorage.getItem("Meeting"))|| [];
        if (FetchData) {
            setEmployees(FetchData);
            setEmployeesName(FetchData.map(employee => employee.name));
        }
        if(FetchDepartments){
            setDepartments(FetchDepartments);
        }
        if(FetchMeeting){
            setMeeting(FetchMeeting);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Employees", JSON.stringify(employees));
        const FetchData = JSON.parse(localStorage.getItem("Employees"))|| [];
        if(FetchData){
        setEmployeesName(FetchData.map(employee => employee.name));
        }
    }, [employees]);

    useEffect(()=>{
        localStorage.setItem("Departments", JSON.stringify(departments));
    },[departments]);

    useEffect(()=>{ 
        localStorage.setItem("Meeting", JSON.stringify(Meeting));
    },[Meeting]);

    return (
        <Employee_context.Provider value={{ employees, setEmployees, departments, setDepartments, EmployeesName, setEmployeesName, Meeting, setMeeting }}>
            {children}
        </Employee_context.Provider>
    );
}
