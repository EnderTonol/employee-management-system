import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Employee_context } from "../Context";
import {
    Input,
    Button,
    TimeInput,
    DatePicker,
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
import {  } from "@heroui/toast";
import Header from '../Header';
import { addToast } from "@heroui/toast";

function ManageEvents() {
    const { Meeting, setMeeting, departments, Todo, setTodo } = useContext(Employee_context);

    const [NwMeeting, setNwMeeting] = useState({
        MeetingName: "",
        MeetingDate: "",
        MeetingTime: "",
        MeetingLocation: "",
        MeetingDescription: "",
        MeetingDepartment: "",
    });

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNwMeeting((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (
            !NwMeeting.MeetingName.trim() ||
            !NwMeeting.MeetingDate.trim() ||
            !NwMeeting.MeetingTime.trim() ||
            !NwMeeting.MeetingLocation.trim() ||
            !NwMeeting.MeetingDescription.trim() ||
            !NwMeeting.MeetingDepartment.trim()
        ) {
            alert("All fields are required.");
            return;
        }
    
        setMeeting((prev) => [NwMeeting, ...prev]);
        addToast({
            title: "Meeting Added",
            description: "Data transmitted",
            timeout: 2000,
            shouldShowTimeoutProgress: true,
            variant: "bordered",
            color: "success"
          });
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
        <motion.div className="grow"
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        >
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
                                    <motion.h1 className="font-sans text-xl">
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
                                        placeholder="Select Departments"
                                    >
                                        {departments.map((dep, index) => (
                                            <SelectItem
                                                key={index}
                                                onPress={() =>
                                                    setNwMeeting((prev) => ({
                                                        ...prev,
                                                        MeetingDepartment: dep.Name,
                                                    }))
                                                }
                                            >
                                                {dep.Name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onPress={handleSubmit}>
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </div>
                        )}
                    </ModalContent>
                </Modal>
                <Header title="Meetings"/>
            </div>
            <div className="p-2">
                {Meeting.length > 0 ? (
                    <Button onPress={onOpen} color="primary" className="w-full">
                        New Meeting
                    </Button>
                ) : (
                    <div className="flex items-center justify-center">
                        <Button onPress={onOpen} color="primary" variant="flat" className="w-full">
                            Add Meeting
                        </Button>
                    </div>
                )}

                {Meeting.length > 0 && (
                    <div className="grid gap-2 p-2 mt-2  rounded-3xl md:grid md:grid-cols-2">
                                {Meeting.map((meeting, index) => (
                                    <Card key={index}>
                                        <CardHeader className="flex flex-col items-start">
                                            <p className="text-sm">id: {"#" + (index + 1)}</p>
                                            <p className="text-lg font-medium">{meeting.MeetingName}</p>
                                            <p className="text-xs">Department: {meeting.MeetingDepartment}</p>
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
                                                onPress={() => {    
                                                    setMeeting(
                                                        Meeting.filter(
                                                            (_, idx) => idx !== index
                                                        )
                                                    );
                                                    addToast({
                                                        title: "Meeting Deleted",
                                                        description: "Data transmitted",
                                                        timeout: 3000,
                                                        shouldShowTimeoutProgress: true,
                                                        variant: "bordered",
                                                        color: "danger"
                                                    });
                                                }}
                                                color="danger"
                                            >
                                                Delete
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default ManageEvents;
