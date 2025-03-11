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
    DatePicker,
} from "@heroui/react";
import { Employee_context } from "../Context";

function Employee_leaves() {
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Tasks component must be wrapped within a ContextProvider");
    }
    const { employees, EmployeeLeaves, setEmployeeLeaves } = context;
    const [Application, setApplication] = useState({});

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleAssign = () => {
      if (!Application.reason.trim() || !Application.name.trim() || !Application.date.trim()) {
          alert("Reason, Name, and Date fields are required.");
          return;
      }
  
      setEmployeeLeaves((prev) => [...prev, Application]);
      setApplication({ reason: "", name: "", date: "", status: "Pending" });
      onOpenChange(false);
  };

    const handleRemove = (index) => {
        setEmployeeLeaves((prev) => prev.filter((_, i) => i !== index));
    };

    const handleDateChange = (dateObj) => {
      const { year, month, day } = dateObj;
      const formatedDate = `${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}/${year}`;
      setApplication((prev) => ({ ...prev, date: formatedDate }));
    };

    return (
        <>
            <div className="p-2">
                <h1>Assigned Leaves</h1>
                <Button onPress={onOpen} color="primary">
                    Add Application
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Assign Application</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <Textarea
                                            onChange={(e) => setApplication((prev) => ({ ...prev, reason: e.target.value }))}
                                            label="Reason"
                                        />
                                        <DatePicker
                                          onChange={handleDateChange}
                                        />
                                        <Select label="Assign task to" name="Employee" placeholder="Select Employee">
                                            {employees.map((itm) => (
                                                <SelectItem
                                                    key={itm.id}
                                                    onPress={() => setApplication((prev) => ({ ...prev, name: itm.name, status: "Pending" }))}
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
                                    <Button color="primary" onPress={()=> handleAssign()}>
                                        Assign
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
                {EmployeeLeaves.length > 0 ? (
                    EmployeeLeaves.map((itm, idx) =>
                        itm.reason ? (
                            <Card key={idx}>
                                <CardHeader>
                                    <p className="test-tiny">{"#0" + (idx + 1)}</p>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <p>Name: {itm.name}</p>
                                    <p>Task: {itm.reason}</p>
                                    <Divider />
                                </CardBody>
                                <CardFooter>  
                                    <p>Status: {itm.status}</p>
                                    <Button color="danger" variant="light" onPress={() => handleRemove(idx)}>Cancel</Button>
                                </CardFooter>
                            </Card>
                        ) : null
                    )
                ) : (
                    <p>No tasks assigned.</p>
                )}
            </div>
        </>
    );
}

export default Employee_leaves;