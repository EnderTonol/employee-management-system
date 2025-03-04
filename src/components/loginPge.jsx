import { Form,Input,Button,Card,CardHeader,CardBody,Divider,Image } from "@heroui/react";
import { useState } from "react";
import { useToast } from "@heroui/toast";
import logo from "./Images/EMSlogo.jpg";
import { useNavigate } from "react-router-dom";


function Login(){
    const [submitted, setSubmitted] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) =>{

        e.preventDefault();
        
        const data = Object.fromEntries(new FormData(e.target))
        
        console.log(data)
        
        setSubmitted(data);
        if(data.email.includes("@") && data.password){
            if(data.email == "admin@mail.com" && data.password == "admin202"){
                navigate("/dashboard")
                sessionStorage.setItem("Account", "Admin")
            }else if(data.email == "staf@mail.com" && data.password == "staf202"){
                alert("Staff")
                sessionStorage.setItem("Account", "Staff")
                navigate('/staff-dashboard')
            }
            else{
                return 0;
            }  
        }else if(!data.email && !data.password){
            setErrors({ email: "Please enter a valid email", password: "Please enter a valid password" })
        }
        
    }

    const NotebookIcon = () => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Notebook Body */}
            <rect x="4" y="3" width="16" height="18" rx="3" ry="3" />
            
            {/* Binding Rings */}
            <line x1="7" y1="6" x2="7" y2="6.5" />
            <line x1="7" y1="9" x2="7" y2="9.5" />
            <line x1="7" y1="12" x2="7" y2="12.5" />
            <line x1="7" y1="15" x2="7" y2="15.5" />
          </svg>
        );
      };

    return(
        <>
        <div className="flex items-center justify-center w-full h-screen bg-slate-200">
           <Card className="w-[400px]">
            <CardHeader>
            <p className="font-bold">Login</p>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-col items-center gap-2">
             <Image src={logo} className="w-[80px]" />
             <p className="font-sans text-2xl font-bold">Welcome Back</p>
             <p className="text-tiny">please enter your detail to sign in</p>
             <Form onSubmit={handleSubmit} validationErrors={errors} className="w-full">
                <Input 
                isRequired
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email" />
                <Input 
                label="Password" 
                labelPlacement="outside" 
                name="password"
                type="password" 
                placeholder="Enter your password"
                isRequired />
                <Button isIconOnly size="sm" color="warning" > <NotebookIcon/> </Button>
                <Button type="submit" color="primary" className="w-full">SignIn</Button>
             </Form>
            </CardBody>
           </Card>
        </div>
        </>
    )
}
export default Login;