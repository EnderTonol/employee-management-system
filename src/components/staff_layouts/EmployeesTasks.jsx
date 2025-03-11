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
      timeout: 3000,
      shouldShowTimeoutProgress: true,
      variant: "bordered",
      color: newTasks[idx].taskStatus ? "primary" : "danger"
    });
  };

  return (
    <>
      <div className="flex flex-wrap p-6">
        {EmployeeStatus.length > 0 ? (
          EmployeeStatus.map((itm, idx) =>
            itm.task ? (
              <Card key={idx} className="w-[300px]">
                <CardHeader>
                  <p className="test-tiny">{"#0" + (idx + 1)}</p>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>Name: {itm.name}</p>
                  <p>Task: {itm.task}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button
                    color={itm.taskStatus ? "primary" : "danger"}
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
    </>
  );
}

export default EmployeeStatus;
