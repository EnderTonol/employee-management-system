import { createContext, useEffect, useState } from "react";

export const Employee_context = createContext();

export default function ContextProvider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [EmployeesName, setEmployeesName] = useState([]);
    const [Meeting,setMeeting] = useState([]);
    const [Todo,setTodo] = useState([]);
    const [indname,setIndname] = useState("");
    const [disc, setDisc] = useState("");
    
    useEffect(() => {
        const FetchData = JSON.parse(sessionStorage.getItem("Employees"))|| [];
        const FetchDepartments = JSON.parse(sessionStorage.getItem("Departments"))|| [];
        const FetchMeeting = JSON.parse(sessionStorage.getItem("Meeting"))|| [];
        const FetchTodos = JSON.parse(sessionStorage.getItem("Todos")) || [];
        const FetchName = JSON.parse(sessionStorage.getItem("indname")) || "";
        const FetchDisc = JSON.parse(sessionStorage.getItem('disc')) || ""
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
        if(FetchTodos){
            setTodo(FetchTodos);
        }
        if(FetchName){
            setIndname(FetchName);
        }
        if(FetchDisc){
            setDisc(FetchDisc);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("Employees", JSON.stringify(employees));
        const FetchData = JSON.parse(sessionStorage.getItem("Employees"))|| [];
        if(FetchData){
        setEmployeesName(FetchData.map(employee => employee.name));
        }
    }, [employees]);

    useEffect(()=>{
        sessionStorage.setItem("Departments", JSON.stringify(departments));
    },[departments]);

    useEffect(()=>{ 
        sessionStorage.setItem("Meeting", JSON.stringify(Meeting));
    },[Meeting]);

    useEffect(()=>{
        sessionStorage.setItem("Todos", JSON.stringify(Todo));
    },[Todo]);

    useEffect(()=>{
        sessionStorage.setItem("IndName", JSON.stringify(indname));
    },[indname]);

    useEffect(()=>{
        sessionStorage.setItem("Disc", JSON.stringify(disc));
    },[disc]);

    return (
        <Employee_context.Provider value={{ employees, setEmployees, departments, setDepartments, EmployeesName, setEmployeesName, Meeting, setMeeting, Todo, setTodo, indname, setIndname, disc, setDisc }}>
            {children}
        </Employee_context.Provider>
    );
}
