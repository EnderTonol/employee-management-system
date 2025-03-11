import { useContext, useState } from "react";
import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Divider,
    Button,
} from "@heroui/react";
import { Employee_context } from "../Context";

function Admin_Employee_Leaves() {
    const context = useContext(Employee_context);
    if (!context) {
        throw new Error("Tasks component must be wrapped within a ContextProvider");
    }
    const { EmployeeLeaves, setEmployeeLeaves } = context;

    const handleApprove = (index) => {
        setEmployeeLeaves((prev) => prev.map((itm, idx) => idx === index ? { ...itm, status: "Approved" } : itm));
    };

    const handleReject = (index) => {
        setEmployeeLeaves((prev) => prev.map((itm, idx) => idx === index ? { ...itm, status: "Rejected" } : itm));
    };

    return (
        <>
            <div className="p-2">
                <h1>Employee Leaves</h1>
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
                                    <p>Status: {itm.status}</p>
                                    <Divider />
                                </CardBody>
                                <CardFooter>  
                                    <Button color="primary" onPress={() => handleApprove(idx)}>
                                        Approve 
                                    </Button>
                                    <Button color="danger" onPress={() => handleReject(idx)}>
                                        Reject
                                    </Button>
                                </CardFooter>
                            </Card>
                        ) : null
                    )
                ) : (
                    <p>No leaves applied.</p>
                )}
            </div>
        </>
    );
}

export default Admin_Employee_Leaves;