import { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Divider,
  Button,
  Form,
  Select,
  SelectItem,
  Textarea,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  ModalContent,
  Chip,
} from "@heroui/react";
import { Employee_context } from "../Context";
import Header from '../Header';
import { addToast } from "@heroui/toast";

function Tasks() {
  const context = useContext(Employee_context);
  if (!context) {
    throw new Error("Tasks component must be wrapped within a ContextProvider");
  }
  const { employees, EmployeeStatus, setEmployeeStatus } = context;
  const [Task, setTask] = useState({
    task: "",
    name: "",
    completed: false,
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleAssign = () => {
    if (!Task.task.trim() || !Task.name.trim()) {
        alert("Task and Name fields are required.");
        return;
    }

    setEmployeeStatus((prev) => [...prev, Task]);
    addToast({
      title: "Task Added",
      description: "Data transmitted",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      variant: "bordered",
      color: "success"
    });
    setTask({ task: "", name: "", completed: false });
    onOpenChange(false);
};


  const handleRemove = (index) => {
    setEmployeeStatus((prev) => prev.filter((_, i) => i !== index));
    addToast({
      title: "Task Removed",
      description: "Data transmitted",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      variant: "bordered",
      color: "success"
    });
  };

  return (
    <>
      <div className="flex flex-col h-full gap-2 p-2 grow bg-slate-300">
        <Header title="Assign Tasks" />
        <Button onPress={onOpen} color="primary">
          Add Task
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Assign Tasks</ModalHeader>
                <ModalBody>
                  <Form>
                    <Textarea
                      onChange={(e) => setTask((prev) => ({ ...prev, task: e.target.value }))}
                      label="Task"
                    />
                    
                    <Select label="Assign task to" name="Employee" placeholder="Select Employee">
                      {employees.map((itm) => (
                        <SelectItem
                          key={itm.id}
                          onPress={() => setTask((prev) => ({ ...prev, name: itm.name }))}
                        >
                          {itm.name}
                        </SelectItem>
                      ))}
                    </Select>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={handleAssign}>
                    Assign
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {EmployeeStatus.length > 0 ? (
          EmployeeStatus.map((itm, idx) =>
            itm.task ? (
              <Card key={idx}>
                <CardHeader>
                  <p className="test-tiny">{"#0" + (idx + 1)}</p>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col gap-2"> 
                  <p>Name: {itm.name}</p>
                  <p>Task: {itm.task}</p>
                  <Chip variant="flat" color={itm.completed ? "success" : "danger"} radius="sm">{itm.completed ? "Completed" : "Incomplete"}</Chip>
                </CardBody>
                  <Divider/>
                <CardFooter>
                  <Button color="danger" onPress={() => handleRemove(idx)}>
                    Remove
                  </Button> 
                </CardFooter>
              </Card>
            ) : null
          )
        ) : (
          <p>No tasks assigned.</p>
        )}
        </div>
      </div>
    </>
  );
}

export default Tasks;
