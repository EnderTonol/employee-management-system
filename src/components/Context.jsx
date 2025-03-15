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
    const [EmployeeLeaves,setEmployeeLeaves] = useState([]);
    
    useEffect(() => {
        sessionStorage.setItem("Departments", JSON.stringify([
          {
            "Name": "Software",
            "ManagerName": "abdullah",
            "Tel": "ghallq",
            "Email": "tg@g",
            "Discription": "Develops and maintains software applications."
          },
          {
            "Name": "HR",
            "ManagerName": "Kiran",
            "Tel": "0411-1234567",
            "Email": "kiran@hr.com",
            "Discription": "Handles recruitment, employee relations, and company policies."
          },
          {
            "Name": "Marketing",
            "ManagerName": "Sara",
            "Tel": "0321-2345678",
            "Email": "sara@marketing.com",
            "Discription": "Focuses on branding, promotions, and market analysis."
          },
          {
            "Name": "Finance",
            "ManagerName": "Reema",
            "Tel": "0431-3456789",
            "Email": "reema@finance.com",
            "Discription": "Manages company budgets, audits, and financial analysis."
          },
          {
            "Name": "IT Support",
            "ManagerName": "Mona",
            "Tel": "0341-4567890",
            "Email": "mona@itsupport.com",
            "Discription": "Provides technical support and IT infrastructure maintenance."
          },
          {
            "Name": "Operations",
            "ManagerName": "Omar",
            "Tel": "0381-8901234",
            "Email": "omar@finance.com",
            "Discription": "Oversees daily business operations and logistics."
          },
          {
            "Name": "Sales",
            "ManagerName": "Adeel",
            "Tel": "0471-7890123",
            "Email": "adeel@marketing.com",
            "Discription": "Responsible for driving revenue and managing customer relationships."
          },
          {
            "Name": "Customer Support",
            "ManagerName": "Tariq",
            "Tel": "0491-9012345",
            "Email": "tariq@itsupport.com",
            "Discription": "Ensures customer satisfaction through support and assistance."
          }
        ]
        ))
          sessionStorage.setItem("Employees",JSON.stringify([
            {"name":"abdullah","id":"12o1","department":"IT Support","jobTitle":"React Native Dev","salary":"120010","JobType":"Manager","Email":"tg@g","Tel":"ghallq"},
            {"name":"Ali","id":"12o2","department":"Sales","jobTitle":"HR Specialist","salary":"80000","JobType":"Employee","Email":"ali@hr.com","Tel":"0311-1234567"},
            {"name":"Sara","id":"12o3","department":"Marketing","jobTitle":"Marketing Manager","salary":"95000","JobType":"Manager","Email":"sara@marketing.com","Tel":"0321-2345678"},
            {"name":"John","id":"12o4","department":"Operations","jobTitle":"Accountant","salary":"70000","JobType":"Employee","Email":"john@finance.com","Tel":"0331-3456789"},
            {"name":"Mona","id":"12o5","department":"Finance","jobTitle":"System Administrator","salary":"85000","JobType":"Admin","Email":"mona@itsupport.com","Tel":"0341-4567890"},
            {"name":"Faisal","id":"12o6","department":"Customer Support","jobTitle":"Frontend Developer","salary":"95000","JobType":"Employee","Email":"faisal@software.com","Tel":"0350-5678901"},
            {"name":"Ayesha","id":"12o7","department":"HR","jobTitle":"Recruiter","salary":"65000","JobType":"Worker","Email":"ayesha@hr.com","Tel":"0361-6789012"},
            {"name":"Zara","id":"12o8","department":"Operations","jobTitle":"SEO Specialist","salary":"72000","JobType":"Employee","Email":"zara@marketing.com","Tel":"0371-7890123"},
            {"name":"Omar","id":"12o9","department":"Software","jobTitle":"Financial Analyst","salary":"88000","JobType":"Employee","Email":"omar@finance.com","Tel":"0381-8901234"},
            {"name":"Nina","id":"12o10","department":"Sales","jobTitle":"Help Desk Support","salary":"60000","JobType":"Worker","Email":"nina@itsupport.com","Tel":"0391-9012345"},
            {"name":"Saad","id":"12o11","department":"IT Support","jobTitle":"Backend Developer","salary":"105000","JobType":"Employee","Email":"saad@software.com","Tel":"0401-0123456"},
            {"name":"Kiran","id":"12o12","department":"Customer Support","jobTitle":"HR Coordinator","salary":"75000","JobType":"Employee","Email":"kiran@hr.com","Tel":"0411-1234567"},
            {"name":"Amir","id":"12o13","department":"Operations","jobTitle":"Content Writer","salary":"70000","JobType":"Worker","Email":"amir@marketing.com","Tel":"0421-2345678"},
            {"name":"Reema","id":"12o14","department":"Software","jobTitle":"Auditor","salary":"92000","JobType":"Employee","Email":"reema@finance.com","Tel":"0431-3456789"},
            {"name":"Bilal","id":"12o15","department":"HR","jobTitle":"Network Engineer","salary":"90000","JobType":"Employee","Email":"bilal@itsupport.com","Tel":"0441-4567890"},
            {"name":"Khalid","id":"12o16","department":"Finance","jobTitle":"Java Developer","salary":"110000","JobType":"Employee","Email":"khalid@software.com","Tel":"0451-5678901"},
            {"name":"Samira","id":"12o17","department":"Marketing","jobTitle":"HR Assistant","salary":"60000","JobType":"Assistant","Email":"samira@hr.com","Tel":"0461-6789012"},
            {"name":"Adeel","id":"12o18","department":"Customer Support","jobTitle":"Graphic Designer","salary":"75000","JobType":"Employee","Email":"adeel@marketing.com","Tel":"0471-7890123"},
            {"name":"Hina","id":"12o19","department":"Sales","jobTitle":"Investment Analyst","salary":"105000","JobType":"Employee","Email":"hina@finance.com","Tel":"0481-8901234"},
            {"name":"Tariq","id":"12o20","department":"Marketing","jobTitle":"IT Support Specialist","salary":"80000","JobType":"Worker","Email":"tariq@itsupport.com","Tel":"0491-9012345"}
          ]))
          sessionStorage.setItem("Meeting", JSON.stringify([
            {
              MeetingName: "Project Kickoff",
              MeetingDate: "2025-03-15",
              MeetingTime: "10:00 AM",
              MeetingLocation: "Conference Room A",
              MeetingDescription: "Initial meeting to discuss project scope and roles.",
              MeetingDepartment: "Software"
            },
            {
              MeetingName: "HR Policy Update",
              MeetingDate: "2025-03-16",
              MeetingTime: "02:00 PM",
              MeetingLocation: "HR Office",
              MeetingDescription: "Discussion on new HR policies and employee benefits.",
              MeetingDepartment: "HR"
            },
            {
              MeetingName: "Marketing Strategy",
              MeetingDate: "2025-03-17",
              MeetingTime: "11:30 AM",
              MeetingLocation: "Marketing Hub",
              MeetingDescription: "Planning next quarter's marketing campaigns.",
              MeetingDepartment: "Marketing"
            }
          ]))
          sessionStorage.setItem("employeeStatus", JSON.stringify([
            { task: "Develop Mobile App UI", name: "abdullah", completed: false },
            { task: "Conduct Employee Interviews", name: "Ali", completed: false },
            { task: "Create Social Media Strategy", name: "Sara", completed: true },
            { task: "Prepare Monthly Financial Report", name: "John", completed: false },
            { task: "Upgrade Company Servers", name: "Mona", completed: true },
            { task: "Fix Website Bugs", name: "Faisal", completed: true },
            { task: "Onboard New Employees", name: "Ayesha", completed: false },
            { task: "Optimize SEO for Blog", name: "Zara", completed: true },
            { task: "Analyze Sales Performance", name: "Omar", completed: true },
            { task: "Resolve Customer Complaints", name: "Nina", completed: false },
            { task: "Implement API for Backend", name: "Saad", completed: false },
            { task: "Design Promotional Graphics", name: "Adeel", completed: true }
          ]))
          sessionStorage.setItem("EmployeeLeaves", JSON.stringify([
            { reason: "Medical Leave", name: "Ali Khan", date: "2025-03-14", status: "Pending" },
            { reason: "Family Emergency", name: "Sara Ahmed", date: "2025-03-15", status: "Pending" },
            { reason: "Vacation", name: "Usman Raza", date: "2025-03-16", status: "Pending" },
            { reason: "Sick Leave", name: "Ayesha Noor", date: "2025-03-17", status: "Pending" },
            { reason: "Personal Work", name: "Bilal Hussain", date: "2025-03-18", status: "Pending" },
            { reason: "Marriage Leave", name: "Hassan Javed", date: "2025-03-19", status: "Pending" },
            { reason: "Training", name: "Zainab Fatima", date: "2025-03-20", status: "Pending" },
            { reason: "Parental Leave", name: "Farhan Saeed", date: "2025-03-21", status: "Pending" },
            { reason: "Holiday", name: "Noor Bano", date: "2025-03-22", status: "Pending" },
            { reason: "Doctor Appointment", name: "Imran Qureshi", date: "2025-03-23", status: "Pending" },
            { reason: "Maternity Leave", name: "Rabia Anwar", date: "2025-03-24", status: "Pending" },
            { reason: "Paternity Leave", name: "Tariq Mehmood", date: "2025-03-25", status: "Pending" },
            { reason: "Conference", name: "Shahbaz Ali", date: "2025-03-26", status: "Pending" },
            { reason: "Bereavement Leave", name: "Faisal Zafar", date: "2025-03-27", status: "Pending" },
            { reason: "Work from Home", name: "Kamran Riaz", date: "2025-03-28", status: "Pending" },
            { reason: "Festival Leave", name: "Nadia Akram", date: "2025-03-29", status: "Pending" }
          ]))
          
        const FetchData = JSON.parse(sessionStorage.getItem("Employees"))|| [];
        const FetchDepartments = JSON.parse(sessionStorage.getItem("Departments"))|| [];
        const FetchMeeting = JSON.parse(sessionStorage.getItem("Meeting"))|| [];
        const FetchName = JSON.parse(sessionStorage.getItem("indname")) || "";
        const FetchDisc = JSON.parse(sessionStorage.getItem('disc')) || "";
        const FetchStatus = JSON.parse(sessionStorage.getItem('employeeStatus')) || [];
        const FetchLeaves = JSON.parse(sessionStorage.getItem('EmployeeLeaves')) || [];
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
        if(FetchLeaves){
          setEmployeeLeaves(FetchLeaves);
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
    
    useEffect(()=>{
      sessionStorage.setItem("EmployeeLeaves", JSON.stringify(EmployeeLeaves));
    },[EmployeeLeaves])
   

    return (
        <Employee_context.Provider value={{ employees, setEmployees, departments, setDepartments, EmployeesName, setEmployeesName, Meeting, setMeeting, EmployeeStatus, setEmployeeStatus, EmployeeLeaves, setEmployeeLeaves }}>
            {children}
        </Employee_context.Provider>
    );
}
