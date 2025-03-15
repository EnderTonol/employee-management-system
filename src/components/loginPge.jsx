import { Form,Input,Button,Card,CardHeader,CardBody,Divider,Image } from "@heroui/react";
import { useState } from "react";
import { addToast, useToast } from "@heroui/toast";
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
                navigate("/dashboard");
                sessionStorage.setItem("Account", "Admin")
                addToast({
                    title: "Login Success",
                    description: "You have successfully logged in as Admin",
                    timeout: 2000,
                    shouldShowTimeoutProgress: true,
                    variant: "bordered",
                })
                navigate('/staff-dashboard')
            }
            else{
                return 0;
            }  
        }else if(!data.email && !data.password){
            setErrors({ email: "Please enter a valid email", password: "Please enter a valid password" })
        }
        
    }


    return(
        <>
        <div className="flex items-center justify-center w-full h-screen bg-slate-200">
           <Card className="w-[300px] lg:w-[400px]">
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
                <Button type="submit" color="primary" className="w-full">SignIn</Button>
                <Card className="w-full mt-2">
                    <CardHeader>
                        Login Guide
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>Email: admin@mail.com</p>
                        <p>Password: admin202</p>
                        <p>Email: staf@mail.com</p>
                        <p>Password: staf202</p>
                    </CardBody>
                </Card>
             </Form>
            </CardBody>
           </Card>
        </div>
        </>
    )
}
export default Login;