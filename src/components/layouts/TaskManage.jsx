import { useContext,useState,useMemo } from "react";
import { Card,CardHeader,CardFooter,CardBody,Divider,Button,ButtonGroup,Form,Input,Select,SelectItem } from "@heroui/react";
import { Modal,ModalBody,ModalFooter,ModalHeader,useDisclosure,ModalContent } from '@heroui/react'
import { Employee_context } from "../Context";
function Tasks(){
        const context = useContext(Employee_context);
        if (!context) {
            throw new Error("DashBoard component must be wrapped within a ContextProvider");
        }
        const { EmployeeStatus, setEmployeeStatus } = context;
        const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));
        const {isOpen, onOpen, onOpenChange} = useDisclosure();

        const selectedValue = useMemo(
          () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
          [selectedKeys],
        );
        

        return (
            <>
            <div className="p-2">
            <h1>Assigned Tasks</h1>
            <Button onPress={onOpen} color="primary">add Task</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <Form>
                <Select
                    label="Department"
                    name="department"
                    placeholder="Select Department"
                    >
                                            
                </Select>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
           
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

                )) : <><p>.</p></>
            } 
            </div>
            </>
        )


}
export default Tasks;