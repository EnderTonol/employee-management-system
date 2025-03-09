import { createContext, useEffect, useState } from "react";

export const Employee_context = createContext();

export default function ContextProvider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [EmployeesName, setEmployeesName] = useState([]);
    const [Meeting,setMeeting] = useState([]);
    const [indname,setIndname] = useState("");
    const [disc, setDisc] = useState("");
    const [EmployeeStatus,setEmployeeStatus] = useState([]);
    
    useEffect(() => {
        sessionStorage.setItem("Departments", JSON.stringify([
            {
              "Name": "software",
              "ManagerName": "Ali",
              "Tel": "0300",
              "Email": "tg@g",
              "Discription": "ggaxa"
            },
            {
              "Name": "HR",
              "ManagerName": "Sara",
              "Tel": "0311",
              "Email": "sara@hr.com",
              "Discription": "Handles recruitment and employee relations."
            },
            {
              "Name": "Marketing",
              "ManagerName": "John",
              "Tel": "0322",
              "Email": "john@marketing.com",
              "Discription": "Focuses on brand development and promotions."
            },
            {
              "Name": "Finance",
              "ManagerName": "Mona",
              "Tel": "0345",
              "Email": "mona@finance.com",
              "Discription": "Manages company finances, budgets, and investments."
            },
            {
              "Name": "IT Support",
              "ManagerName": "David",
              "Tel": "0334",
              "Email": "david@itsupport.com",
              "Discription": "Provides technical support and maintenance of IT systems."
            }
          ]
          ))
          sessionStorage.setItem("Employees",JSON.stringify([
            {
              "name": "abdullah",
              "id": "12o1",
              "department": "software",
              "jobTitle": "React Native Dev",
              "salary": "120010",
              "JobType": "Manager",
              "Email": "tg@g",
              "Tel": "ghallq"
            },
            {
              "name": "Ali",
              "id": "12o2",
              "department": "HR",
              "jobTitle": "HR Specialist",
              "salary": "80000",
              "JobType": "Employee",
              "Email": "ali@hr.com",
              "Tel": "0311-1234567"
            },
            {
              "name": "Sara",
              "id": "12o3",
              "department": "Marketing",
              "jobTitle": "Marketing Manager",
              "salary": "95000",
              "JobType": "Manager",
              "Email": "sara@marketing.com",
              "Tel": "0321-2345678"
            },
            {
              "name": "John",
              "id": "12o4",
              "department": "Finance",
              "jobTitle": "Accountant",
              "salary": "70000",
              "JobType": "Employee",
              "Email": "john@finance.com",
              "Tel": "0331-3456789"
            },
            {
              "name": "Mona",
              "id": "12o5",
              "department": "IT Support",
              "jobTitle": "System Administrator",
              "salary": "85000",
              "JobType": "Admin",
              "Email": "mona@itsupport.com",
              "Tel": "0341-4567890"
            },
            {
              "name": "Faisal",
              "id": "12o6",
              "department": "software",
              "jobTitle": "Frontend Developer",
              "salary": "95000",
              "JobType": "Employee",
              "Email": "faisal@software.com",
              "Tel": "0350-5678901"
            },
            {
              "name": "Ayesha",
              "id": "12o7",
              "department": "HR",
              "jobTitle": "Recruiter",
              "salary": "65000",
              "JobType": "Worker",
              "Email": "ayesha@hr.com",
              "Tel": "0361-6789012"
            },
            {
              "name": "Zara",
              "id": "12o8",
              "department": "Marketing",
              "jobTitle": "SEO Specialist",
              "salary": "72000",
              "JobType": "Employee",
              "Email": "zara@marketing.com",
              "Tel": "0371-7890123"
            },
            {
              "name": "Omar",
              "id": "12o9",
              "department": "Finance",
              "jobTitle": "Financial Analyst",
              "salary": "88000",
              "JobType": "Employee",
              "Email": "omar@finance.com",
              "Tel": "0381-8901234"
            },
            {
              "name": "Nina",
              "id": "12o10",
              "department": "IT Support",
              "jobTitle": "Help Desk Support",
              "salary": "60000",
              "JobType": "Worker",
              "Email": "nina@itsupport.com",
              "Tel": "0391-9012345"
            },
            {
              "name": "Saad",
              "id": "12o11",
              "department": "software",
              "jobTitle": "Backend Developer",
              "salary": "105000",
              "JobType": "Employee",
              "Email": "saad@software.com",
              "Tel": "0401-0123456"
            },
            {
              "name": "Kiran",
              "id": "12o12",
              "department": "HR",
              "jobTitle": "HR Coordinator",
              "salary": "75000",
              "JobType": "Employee",
              "Email": "kiran@hr.com",
              "Tel": "0411-1234567"
            },
            {
              "name": "Amir",
              "id": "12o13",
              "department": "Marketing",
              "jobTitle": "Content Writer",
              "salary": "70000",
              "JobType": "Worker",
              "Email": "amir@marketing.com",
              "Tel": "0421-2345678"
            },
            {
              "name": "Reema",
              "id": "12o14",
              "department": "Finance",
              "jobTitle": "Auditor",
              "salary": "92000",
              "JobType": "Employee",
              "Email": "reema@finance.com",
              "Tel": "0431-3456789"
            },
            {
              "name": "Bilal",
              "id": "12o15",
              "department": "IT Support",
              "jobTitle": "Network Engineer",
              "salary": "90000",
              "JobType": "Employee",
              "Email": "bilal@itsupport.com",
              "Tel": "0441-4567890"
            },
            {
              "name": "Khalid",
              "id": "12o16",
              "department": "software",
              "jobTitle": "Java Developer",
              "salary": "110000",
              "JobType": "Employee",
              "Email": "khalid@software.com",
              "Tel": "0451-5678901"
            },
            {
              "name": "Samira",
              "id": "12o17",
              "department": "HR",
              "jobTitle": "HR Assistant",
              "salary": "60000",
              "JobType": "Assistant",
              "Email": "samira@hr.com",
              "Tel": "0461-6789012"
            },
            {
              "name": "Adeel",
              "id": "12o18",
              "department": "Marketing",
              "jobTitle": "Graphic Designer",
              "salary": "75000",
              "JobType": "Employee",
              "Email": "adeel@marketing.com",
              "Tel": "0471-7890123"
            },
            {
              "name": "Hina",
              "id": "12o19",
              "department": "Finance",
              "jobTitle": "Investment Analyst",
              "salary": "105000",
              "JobType": "Employee",
              "Email": "hina@finance.com",
              "Tel": "0481-8901234"
            },
            {
              "name": "Tariq",
              "id": "12o20",
              "department": "IT Support",
              "jobTitle": "IT Support Specialist",
              "salary": "80000",
              "JobType": "Worker",
              "Email": "tariq@itsupport.com",
              "Tel": "0491-9012345"
            }
          ]          
          ))
        const FetchData = JSON.parse(sessionStorage.getItem("Employees"))|| [];
        const FetchDepartments = JSON.parse(sessionStorage.getItem("Departments"))|| [];
        const FetchMeeting = JSON.parse(sessionStorage.getItem("Meeting"))|| [];
        const FetchName = JSON.parse(sessionStorage.getItem("indname")) || "";
        const FetchDisc = JSON.parse(sessionStorage.getItem('disc')) || "";
        const FetchStatus = JSON.parse(sessionStorage.getItem('employeeStatus')) || [];
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
        if(FetchName){
            setIndname(FetchName);
        }
        if(FetchDisc){
            setDisc(FetchDisc);
        }
        if(FetchStatus){
            setEmployeeStatus(FetchStatus)
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
        sessionStorage.setItem("IndName", JSON.stringify(indname));
    },[indname]);

    useEffect(()=>{
        sessionStorage.setItem("Disc", JSON.stringify(disc));
    },[disc]);

    useEffect(()=>{
        sessionStorage.setItem("employeeStatus", JSON.stringify(EmployeeStatus));
    },[EmployeeStatus])

    return (
        <Employee_context.Provider value={{ employees, setEmployees, departments, setDepartments, EmployeesName, setEmployeesName, Meeting, setMeeting, indname, setIndname, disc, setDisc, EmployeeStatus, setEmployeeStatus }}>
            {children}
        </Employee_context.Provider>
    );
}
