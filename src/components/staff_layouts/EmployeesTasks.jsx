import { useState, useContext } from "react";
import { Employee_context } from "../Context";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  Divider
} from "@heroui/react";
import { addToast } from '@heroui/toast'
import StaffHeader from "../stafheader";

function EmployeeStatus() {
  const context = useContext(Employee_context);

  if (!context) {
    throw new Error(
      "Employees component must be wrapped within a ContextProvider"
    );
  }

  const { EmployeeStatus, setEmployeeStatus } = context;

  const handleToggleStatus = (idx) => {
    const newTasks = [...EmployeeStatus];
    newTasks[idx].taskStatus = !newTasks[idx].taskStatus;
    setEmployeeStatus(newTasks);
    addToast({
      title: newTasks[idx].taskStatus ? "Completed" : "InCompleted",
      description: "Data transmitted",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      variant: "bordered",
      color: newTasks[idx].taskStatus ? "success" : "danger"
    });
  };

  return (
    <>
      <div className="grow flex flex-col p-2 gap-2">
        <StaffHeader title="Employee Tasks" />
        <div className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {EmployeeStatus.length > 0 ? (
          EmployeeStatus.map((itm, idx) =>
            itm.task ? (
              <Card key={idx} className="w-full">
                <CardHeader>
                  <p className="text-tiny">#{idx + 1}</p>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>Name: {itm.name}</p>
                  <p>Task: {itm.task}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button
                    color={itm.taskStatus ? "success" : "danger"}
                    className="w-full"
                    onPress={() => handleToggleStatus(idx)}
                  >
                    {itm.taskStatus ? "Completed" : "InCompleted"}
                  </Button>
                </CardFooter>
              </Card>
            ) : null
          )
        ) : (
          <p>No tasks assigned yet.</p>
        )}
        </div>
      </div>
    </>
  );
}

export default EmployeeStatus;
