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
    Chip
} from "@heroui/react";
import { Employee_context } from "../Context";
import StaffHeader from "../stafheader";
import { addToast } from "@heroui/toast";

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
        addToast({
            title: "Removed",
            description: "Data transmitted",
            timeout: 1000,
            shouldShowTimeoutProgress: true,
            variant: "bordered",
            color: "danger"
          });

    };

    const handleDateChange = (dateObj) => {
      const { year, month, day } = dateObj;
      const formatedDate = `${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}/${year}`;
      setApplication((prev) => ({ ...prev, date: formatedDate }));
    };

    return (
        <>
            <div className="grow flex flex-col p-2 gap-2">
                <StaffHeader title="Assigned Leaves" />
                <Button className="w-full" onPress={onOpen} color="primary">
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
                <div className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {EmployeeLeaves.length > 0 ? (
                    EmployeeLeaves.map((itm, idx) =>
                        itm.reason ? (
                            <Card key={idx}>
                                <CardHeader>
                                    <p className="text-tiny">#{idx + 1}</p>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <p>Name: {itm.name}</p>
                                    <p>Task: {itm.reason}</p>
                                    <Chip color={
                                        itm.status === "Pending" ? "warning" : (itm.status === "Approved" ? "success" : "danger")
                                    } radius="sm" variant="flat">{itm.status}</Chip>
                                </CardBody>
                                <Divider />
                                <CardFooter>  
                                    <Button color="danger" className={itm.status === "Pending" ? "w-full" : "hidden"} variant="solid" onPress={() => handleRemove(idx)}>Cancel</Button>
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

export default Employee_leaves;