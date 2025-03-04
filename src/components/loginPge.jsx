import { Form,Input,Button,Card,CardHeader,CardBody,Divider } from "@heroui/react";
import { useState } from "react";
import { useToast } from "@heroui/toast";

function Login(){
    const [submitted, setSubmitted] = useState(null);
    const [Email,setEmail] = useState("");
    const [Pass,setPass] = useState("");
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) =>{

        e.preventDefault();
        
        
        setSubmitted(data);
        if(Email && Pass){
            if(Email == "admin@mail.com" && Pass == "admin202"){
                alert("Admin")
                sessionStorage.setItem("Account", "Admin")
            }else if(Email == "staf@mail.com" && Pass == "staf202"){
                alert("Staff")
                sessionStorage.setItem("Account", "Staff")
            }
            else{
                alert('Incorrect')
            }
            
        }else{
            setErrors({ msg: "fill you email and password!" })
        }
        
    }

    return(
        <>
        <div className="flex items-center justify-center w-full h-screen bg-slate-400">
           <Card className="w-[400px]">
            <CardHeader>
            <p className="font-bold">Login</p>
            </CardHeader>
            <Divider/>
            <CardBody>
             <Form onSubmit={handleSubmit} validationErrors={errors}>
                <Input 
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email" 
                onChange={(e)=> setEmail(e.target.value)} />
                <Input 
                label="Password" 
                labelPlacement="outside" 
                name="password"
                type="password" 
                placeholder="Enter your password"
                isRequired 
                onChange={(e)=> setPass(e.target.value)} />
                <Button type="submit" color="primary">SignIn</Button>
             </Form>
            </CardBody>
           </Card>
        </div>
        </>
    )
}
export default Login;