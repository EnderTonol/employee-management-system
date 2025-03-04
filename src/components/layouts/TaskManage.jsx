import { useContext } from "react";
import { Card,CardHeader,CardFooter,CardBody,Divider,Button,ButtonGroup } from "@heroui/react";
import { Modal,ModalBody,ModalFooter,ModalHeader } from '@heroui/react'
import { Employee_context } from "../Context";
function Tasks(){
        const context = useContext(Employee_context);
        if (!context) {
            throw new Error("DashBoard component must be wrapped within a ContextProvider");
        }
        const { EmployeeStatus, setEmployeeStatus } = context;

        return (
            <>
            {
              (EmployeeStatus.length > 0)?
                EmployeeStatus.map((itm,idx)=>(
                  <>
                   <Card>
                    <CardHeader>
                      <p className="test-tiny">{"#0"+(idx+1)}</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                      <p>Name: {itm.name}</p>
                      <p>Email: {itm.email}</p>
                      <p>Task: {itm.task}</p>
                    </CardBody>
                    <CardFooter>
                      <p>Status: {(itm.completed)? "Completed" : "InCompleted"}</p>
                    </CardFooter>
                   </Card>
                  </>

                )) : <>hh</>
            }
            </>
        )


}
export default Tasks;