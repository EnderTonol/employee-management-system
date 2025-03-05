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
              "JobType": "Full-Time",
              "Email": "ali@hr.com",
              "Tel": "0311-1234567"
            },
            {
              "name": "Sara",
              "id": "12o3",
              "department": "Marketing",
              "jobTitle": "Marketing Manager",
              "salary": "95000",
              "JobType": "Full-Time",
              "Email": "sara@marketing.com",
              "Tel": "0321-2345678"
            },
            {
              "name": "John",
              "id": "12o4",
              "department": "Finance",
              "jobTitle": "Accountant",
              "salary": "70000",
              "JobType": "Full-Time",
              "Email": "john@finance.com",
              "Tel": "0331-3456789"
            },
            {
              "name": "Mona",
              "id": "12o5",
              "department": "IT Support",
              "jobTitle": "System Administrator",
              "salary": "85000",
              "JobType": "Full-Time",
              "Email": "mona@itsupport.com",
              "Tel": "0341-4567890"
            },
            {
              "name": "Faisal",
              "id": "12o6",
              "department": "software",
              "jobTitle": "Frontend Developer",
              "salary": "95000",
              "JobType": "Full-Time",
              "Email": "faisal@software.com",
              "Tel": "0350-5678901"
            },
            {
              "name": "Ayesha",
              "id": "12o7",
              "department": "HR",
              "jobTitle": "Recruiter",
              "salary": "65000",
              "JobType": "Part-Time",
              "Email": "ayesha@hr.com",
              "Tel": "0361-6789012"
            },
            {
              "name": "Zara",
              "id": "12o8",
              "department": "Marketing",
              "jobTitle": "SEO Specialist",
              "salary": "72000",
              "JobType": "Full-Time",
              "Email": "zara@marketing.com",
              "Tel": "0371-7890123"
            },
            {
              "name": "Omar",
              "id": "12o9",
              "department": "Finance",
              "jobTitle": "Financial Analyst",
              "salary": "88000",
              "JobType": "Full-Time",
              "Email": "omar@finance.com",
              "Tel": "0381-8901234"
            },
            {
              "name": "Nina",
              "id": "12o10",
              "department": "IT Support",
              "jobTitle": "Help Desk Support",
              "salary": "60000",
              "JobType": "Full-Time",
              "Email": "nina@itsupport.com",
              "Tel": "0391-9012345"
            },
            {
              "name": "Saad",
              "id": "12o11",
              "department": "software",
              "jobTitle": "Backend Developer",
              "salary": "105000",
              "JobType": "Full-Time",
              "Email": "saad@software.com",
              "Tel": "0401-0123456"
            },
            {
              "name": "Kiran",
              "id": "12o12",
              "department": "HR",
              "jobTitle": "HR Coordinator",
              "salary": "75000",
              "JobType": "Full-Time",
              "Email": "kiran@hr.com",
              "Tel": "0411-1234567"
            },
            {
              "name": "Amir",
              "id": "12o13",
              "department": "Marketing",
              "jobTitle": "Content Writer",
              "salary": "70000",
              "JobType": "Part-Time",
              "Email": "amir@marketing.com",
              "Tel": "0421-2345678"
            },
            {
              "name": "Reema",
              "id": "12o14",
              "department": "Finance",
              "jobTitle": "Auditor",
              "salary": "92000",
              "JobType": "Full-Time",
              "Email": "reema@finance.com",
              "Tel": "0431-3456789"
            },
            {
              "name": "Bilal",
              "id": "12o15",
              "department": "IT Support",
              "jobTitle": "Network Engineer",
              "salary": "90000",
              "JobType": "Full-Time",
              "Email": "bilal@itsupport.com",
              "Tel": "0441-4567890"
            },
            {
              "name": "Khalid",
              "id": "12o16",
              "department": "software",
              "jobTitle": "Java Developer",
              "salary": "110000",
              "JobType": "Full-Time",
              "Email": "khalid@software.com",
              "Tel": "0451-5678901"
            },
            {
              "name": "Samira",
              "id": "12o17",
              "department": "HR",
              "jobTitle": "HR Assistant",
              "salary": "60000",
              "JobType": "Full-Time",
              "Email": "samira@hr.com",
              "Tel": "0461-6789012"
            },
            {
              "name": "Adeel",
              "id": "12o18",
              "department": "Marketing",
              "jobTitle": "Graphic Designer",
              "salary": "75000",
              "JobType": "Full-Time",
              "Email": "adeel@marketing.com",
              "Tel": "0471-7890123"
            },
            {
              "name": "Hina",
              "id": "12o19",
              "department": "Finance",
              "jobTitle": "Investment Analyst",
              "salary": "105000",
              "JobType": "Full-Time",
              "Email": "hina@finance.com",
              "Tel": "0481-8901234"
            },
            {
              "name": "Tariq",
              "id": "12o20",
              "department": "IT Support",
              "jobTitle": "IT Support Specialist",
              "salary": "80000",
              "JobType": "Full-Time",
              "Email": "tariq@itsupport.com",
              "Tel": "0491-9012345"
            },
            {
              "name": "Laila",
              "id": "12o21",
              "department": "software",
              "jobTitle": "UI/UX Designer",
              "salary": "90000",
              "JobType": "Full-Time",
              "Email": "laila@software.com",
              "Tel": "0501-0123456"
            },
            {
              "name": "Nashit",
              "id": "12o22",
              "department": "HR",
              "jobTitle": "Payroll Specialist",
              "salary": "65000",
              "JobType": "Part-Time",
              "Email": "nashit@hr.com",
              "Tel": "0511-1234567"
            },
            {
              "name": "Rida",
              "id": "12o23",
              "department": "Marketing",
              "jobTitle": "Social Media Manager",
              "salary": "95000",
              "JobType": "Full-Time",
              "Email": "rida@marketing.com",
              "Tel": "0521-2345678"
            },
            {
              "name": "Yasir",
              "id": "12o24",
              "department": "Finance",
              "jobTitle": "Treasury Manager",
              "salary": "120000",
              "JobType": "Full-Time",
              "Email": "yasir@finance.com",
              "Tel": "0531-3456789"
            },
            {
              "name": "Fariha",
              "id": "12o25",
              "department": "IT Support",
              "jobTitle": "IT Project Manager",
              "salary": "95000",
              "JobType": "Full-Time",
              "Email": "fariha@itsupport.com",
              "Tel": "0541-4567890"
            },
            {
              "name": "Muneeb",
              "id": "12o26",
              "department": "software",
              "jobTitle": "DevOps Engineer",
              "salary": "115000",
              "JobType": "Full-Time",
              "Email": "muneeb@software.com",
              "Tel": "0551-5678901"
            },
            {
              "name": "Rashid",
              "id": "12o27",
              "department": "HR",
              "jobTitle": "Employee Relations Specialist",
              "salary": "80000",
              "JobType": "Full-Time",
              "Email": "rashid@hr.com",
              "Tel": "0561-6789012"
            },
            {
              "name": "Sania",
              "id": "12o28",
              "department": "Marketing",
              "jobTitle": "Brand Manager",
              "salary": "110000",
              "JobType": "Full-Time",
              "Email": "sania@marketing.com",
              "Tel": "0571-7890123"
            },
            {
              "name": "Zain",
              "id": "12o29",
              "department": "Finance",
              "jobTitle": "Risk Manager",
              "salary": "105000",
              "JobType": "Full-Time",
              "Email": "zain@finance.com",
              "Tel": "0581-8901234"
            },
            {
              "name": "Ayesha",
              "id": "12o30",
              "department": "IT Support",
              "jobTitle": "Database Administrator",
              "salary": "95000",
              "JobType": "Full-Time",
              "Email": "ayesha@itsupport.com",
              "Tel": "0591-9012345"
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

    useEffect(()=>{
        if (employees && employees.length > 0) {
            const employeeDetails = employees.map(emp => ({
                name: emp.name || 'No Name',
                email: emp.Email || 'No Email',
                task: "",
                taskStatus: false
            }));
            setEmployeeStatus(employeeDetails);
            
        }
    },[employees])

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
