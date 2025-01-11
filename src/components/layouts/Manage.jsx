import { useEffect, useState } from "react";
import { useContext } from "react";
import { Employee_context } from "../Context";
import { Input,Button, TimeInput ,DatePicker, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Select,SelectItem } from "@nextui-org/react";


function Manage(){
    const {Meeting,setMeeting, EmployeesName} = useContext(Employee_context);

    const [NwMeeting, setNwMeeting] = useState({ MeetingName: "", MeetingDate: "", MeetingTime: "", MeetingLocation: "", MeetingDescription: "", MeetingParticipants: "" });
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNwMeeting((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = () => {
        setMeeting((prev) => [...prev, NwMeeting]);
    }

    const handleTimeChange = (timeObj) => {
        const { hour, minute } = timeObj;
        const formatedTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        setNwMeeting((prev) => ({ ...prev, MeetingTime: formatedTime }));
    }

    const handleDateChange = (dateObj) => {
        const { year, month, day } = dateObj;

        const formatedData = `${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}/${year}`;
        setNwMeeting((prev) => ({ ...prev, MeetingDate: dateObj }));
    }
    

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
              <path d="M12 8v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        );
      };

      
    return (
       <>
       <div>
        <Input label="Meeting Name" name="MeetingName" onChange={handleInputChange} />
        <DatePicker isClearable label="Meeting Date" name="MeetingDate" onChange={handleDateChange} />
        <TimeInput description="Please enter your meeting time" name="MeetingTime" label="Meeting Time" onChange={handleTimeChange} endContent={<ClockCircleLinearIcon />} />
        <Input label="Meeting Location" name="MeetingLocation" onChange={handleInputChange} />
        <Input label="Meeting Description" name="MeetingDescription" onChange={handleInputChange} />
        <Select
        label="Participants"
        name="MeetingParticipants"
        placeholder="Select Participants"
        >
            {
                EmployeesName.map((employees,index) => (
                    <SelectItem key={index} value={employees} onChange={handleInputChange}>{employees}</SelectItem>
                ))
            }
        </Select>
        <Button onPress={handleSubmit}>Click</Button>
        <Table>
            <TableHeader>
                <TableColumn>Meeting Name</TableColumn>
                <TableColumn>Meeting Date</TableColumn>
                <TableColumn>Meeting Time</TableColumn>
                <TableColumn>Meeting Location</TableColumn>
                <TableColumn>Meeting Description</TableColumn>
                <TableColumn>Meeting Participants</TableColumn>
                <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    Meeting.map((meeting,index) => (
                        <TableRow key={index}>
                            <TableCell>{meeting.MeetingName}</TableCell>
                            <TableCell>{meeting.MeetingDate}</TableCell>
                            <TableCell>{meeting.MeetingTime}</TableCell>
                            <TableCell>{meeting.MeetingLocation}</TableCell>
                            <TableCell>{meeting.MeetingDescription}</TableCell>
                            <TableCell>{meeting.MeetingParticipants}</TableCell>
                            <TableCell><Button onPress={()=>setMeeting(Meeting.filter((itm,idx)=> idx !== index))}>Delete</Button></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
       </div>
       </>
    )
}

export default Manage;