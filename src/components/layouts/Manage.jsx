import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Employee_context } from "../Context";
import {
    Input,
    Button,
    TimeInput,
    DatePicker,
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Select,
    SelectItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Checkbox,
    Card,
    CardBody,
    CardHeader,
    Divider,
    CardFooter,
    
} from "@heroui/react";
import { useDisclosure } from "@heroui/react";

function Manage() {
    const { Meeting, setMeeting, departments, Todo, setTodo } = useContext(Employee_context);

    const [NwMeeting, setNwMeeting] = useState({
        MeetingName: "",
        MeetingDate: "",
        MeetingTime: "",
        MeetingLocation: "",
        MeetingDescription: "",
        MeetingParticipants: "",
    });

    const [NewTodo, setNewTodo] = useState({ todo: "", Done: false });

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNwMeeting((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setMeeting((prev) => [...prev, NwMeeting]);
        onOpenChange(false);
    };

    const handleTimeChange = (timeObj) => {
        const { hour, minute } = timeObj;
        const formatedTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        setNwMeeting((prev) => ({ ...prev, MeetingTime: formatedTime }));
    };

    const handleDateChange = (dateObj) => {
        const { year, month, day } = dateObj;
        const formatedDate = `${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}/${year}`;
        setNwMeeting((prev) => ({ ...prev, MeetingDate: formatedDate }));
    };

    const handleS = (e) => {
        e.preventDefault();
        e.target.reset();
        setTodo((prev) => [...prev, NewTodo]);
        setNewTodo({ todo: "", Done: false });
    };

    const handleTodoChange = (e) => {
        const { name, value } = e.target;
        setNewTodo((prev) => ({ ...prev, [name]: value }));
    };

    const toggleCompletion = (index) => {
        setTodo(
            Todo.map((task, idx) =>
                idx === index ? { ...task, Done: !task.Done } : task
            )
        );
    };

    const ClockCircleLinearIcon = (props) => {
        return (
            <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                {...props}
            >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path
                        d="M12 8v4l2.5 2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        );
    };

    return (
        <div className="grow">
            <div className="w-full p-2">
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="center"
                    backdrop="blur"
                >
                    <ModalContent>
                        {(onClose) => (
                            <div className="flex flex-col gap-2">
                                <ModalHeader>
                                    <motion.h1 className="mb-1 font-sans text-xl">
                                        Add Meeting
                                    </motion.h1>
                                </ModalHeader>
                                <ModalBody>
                                    <Input label="Meeting Name" name="MeetingName" onChange={handleInputChange} />
                                    <DatePicker isClearable label="Meeting Date" name="MeetingDate" onChange={handleDateChange} />
                                    <TimeInput
                                        description="Please enter your meeting time"
                                        name="MeetingTime"
                                        label="Meeting Time"
                                        onChange={handleTimeChange}
                                        endContent={<ClockCircleLinearIcon />}
                                    />
                                    <Input
                                        label="Meeting Location"
                                        name="MeetingLocation"
                                        onChange={handleInputChange}
                                    />
                                    <Input
                                        label="Meeting Description"
                                        name="MeetingDescription"
                                        onChange={handleInputChange}
                                    />
                                    <Select
                                        label="Departments"
                                        name="Department"
                                        placeholder="Select Departments"
                                    >
                                        {departments.map((dep, index) => (
                                            <SelectItem
                                                key={index}
                                                value={dep}
                                                onPress={() =>
                                                    setNwMeeting((prev) => ({
                                                        ...prev,
                                                        Department: dep.name,
                                                    }))
                                                }
                                            >
                                                {dep.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onPress={handleSubmit}>
                                        Click
                                    </Button>
                                </ModalFooter>
                            </div>
                        )}
                    </ModalContent>
                </Modal>
                <div className="flex flex-col gap-2 mt-3">
                    <motion.h1 className="mb-1 font-sans text-2xl font-bold text-left pl-16">
                        Meeting Manager
                    </motion.h1>
                </div>
            </div>

            <div className="p-2">
                {Meeting.length > 0 ? (
                    <Button onPress={onOpen} color="primary" className="mb-2">
                        New Meeting
                    </Button>
                ) : (
                    <div className="flex items-center justify-center">
                        <Button onPress={onOpen} color="primary" variant="flat">
                            Add Meeting
                        </Button>
                    </div>
                )}

                {Meeting.length > 0 && (
                    <div className="grid gap-2 p-2 mt-2 bg-slate-100 rounded-3xl md:grid md:grid-cols-2">
                                {Meeting.map((meeting, index) => (
                                    <Card key={index}>
                                        <CardHeader className="flex flex-col items-start">
                                            <p className="text-sm">id: {"#" + (index + 1)}</p>
                                            <p className="text-lg font-medium">{meeting.MeetingName}</p>
                                            <p className="text-xs">Department: {meeting.Department}</p>
                                        </CardHeader>
                                        <Divider />
                                        <CardBody>
                                            <p>Meeting Date: {meeting.MeetingDate}</p>
                                            <p>Meeting Time: {meeting.MeetingTime}</p>
                                            <p>Meeting Location: {meeting.MeetingLocation}</p>
                                            <p>Meeting Description: {meeting.MeetingDescription}</p>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter className="flex flex-row justify-between">
                                            <Button
                                                onPress={() =>
                                                    setMeeting(
                                                        Meeting.filter(
                                                            (_, idx) => idx !== index
                                                        )
                                                    )
                                                }
                                                color="danger"
                                            >
                                                Delete
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                    </div>
                )}
                <div className="mt-3">
                <motion.h1 className="mb-1 font-sans text-2xl font-bold text-left">
                        To-do Manager
                    </motion.h1>
                    <Form
                        onSubmit={handleS}
                        className="flex flex-row items-center justify-center gap-2 mt-6 mb-2"
                    >
                        <Input label="Task" name="todo" onChange={handleTodoChange} />
                        <Button type="submit" variant="flat" color="primary" size="lg">
                            Add Task
                        </Button>
                    </Form>
                    {(Todo.length > 0)? (<div className="p-2 mt-2 bg-slate-100 rounded-3xl">
                        <Card>
                            <TableHeader>
                                <p>Task</p>
                            </TableHeader>
                            <Divider/>
                            <CardBody>
                                {Todo.map((itm, idx) => (
                                    <>
                                    <div key={idx} className="flex flex-row justify-between my-1">
                                        <Checkbox onValueChange={() => toggleCompletion(idx)} lineThrough className="font-semibold">
                                        {itm.todo}
                                        </Checkbox>                                          
                                                <Button onPress={() =>setTodo(Todo.filter((_, index) => index !== idx ))}color="danger">
                                                    Delete
                                                </Button>
                                    </div>
                                    <Divider/>
                                    </>
                                ))}
                            </CardBody>
                        </Card>
                    </div>) : (<Card> 
                            <TableHeader>
                                <p>Task</p>
                            </TableHeader>
                            <CardBody >
                                <p className="text-center">No task yet</p><br/>
                                <p className="text-center">Add your To-dos and Keep track of them accross Ninty Workspace</p>
                            </CardBody>
                            </Card>)}
                </div>
            </div>
        </div>
    );
}

export default Manage;
