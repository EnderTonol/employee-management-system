import { useContext, useState } from "react";
import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Divider,
    Button,
    ButtonGroup,
    Chip
} from "@heroui/react";
import { Employee_context } from "../Context";
import Header from '../Header';
import { addToast } from "@heroui/toast";

function Admin_Employee_Leaves() {
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Tasks component must be wrapped within a ContextProvider");
    }
    const { EmployeeLeaves, setEmployeeLeaves } = context;

    const handleApprove = (index) => {
        setEmployeeLeaves((prev) => prev.map((itm, idx) => idx === index ? { ...itm, status: "Approved" } : itm));
        addToast({
            title: "Leave Approved",
            description: "Data transmitted",
            timeout: 2000,
            shouldShowTimeoutProgress: true,
            variant: "bordered",
            color: "success"    
        });
    };

    const handleReject = (index) => {
        setEmployeeLeaves((prev) => prev.map((itm, idx) => idx === index ? { ...itm, status: "Rejected" } : itm));
        addToast({
            title: "Leave Rejected",
            description: "Data transmitted",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
            variant: "bordered",
            color: "success"
        });
    };

    return (
        <>
            <div className="p-2 grow flex flex-col gap-2">
                <Header title="Employee Leaves" />
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {EmployeeLeaves.length > 0 ? (
                        EmployeeLeaves.map((itm, idx) =>
                            itm.reason ? (
                            <Card key={idx}>
                                <CardHeader>
                                    <p className="test-tiny">{"#0" + (idx + 1)}</p>
                                </CardHeader>
                                <Divider />
                                <CardBody className="flex flex-col gap-2">
                                    <p>Name: {itm.name}</p>
                                    <p>Task: {itm.reason}</p>
                                    <Chip variant="flat" color={itm.status === "Approved" ? "success" : "danger"} radius="sm">{itm.status}</Chip>
                                </CardBody>
                                    <Divider />
                                <CardFooter>  
                                    <ButtonGroup>
                                        <Button color="primary" onPress={() => handleApprove(idx)}>
                                            Approve 
                                        </Button>
                                    <Button color="danger" variant="flat" onPress={() => handleReject(idx)}>
                                        Reject
                                    </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ) : null
                    )
                ) : (
                    <p>No leaves applied.</p>
                )}
                </div>
            </div>
        </>
    );
}

export default Admin_Employee_Leaves;