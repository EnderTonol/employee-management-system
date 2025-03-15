import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { Employee_context } from "../Context";
import {
  Table,
  TableColumn,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Divider,
} from "@heroui/react";
import { Image } from "@heroui/image";
import NoResults from "../Images/noFoundR.jpg";
import Table1 from "../layouts/Table";
import StaffHeader from "../stafheader";
function StaffDashBoard() {
  const [meeting, setmeeting] = useState([]);

  const context = useContext(Employee_context);
  if (!context) {
    throw new Error(
      "DashBoard component must be wrapped within a ContextProvider"
    );
  }
  const { Meeting, EmployeeStatus, EmployeeLeaves } = context;

  useEffect(() => {
    const fetchData = localStorage.getItem("Meeting");
    if (fetchData) {
      const FetchParsed = JSON.parse(fetchData);
      setmeeting(FetchParsed);
    }
  }, []);


  return (
    <div className="p-2 grow w-full  flex flex-col gap-2">
      <StaffHeader title="Staff DashBoard" />
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.3 }}
        className="flex flex-col w-full gap-2 lg:flex-row overflow-hidden"
      >
        <div className="w-full p-2 rounded-md bg-slate-300">
          <h1 className="mb-2 font-bold">Assigned Tasks</h1>
          <Divider />
          <Table
            classNames={{
              base: "max-h-[300px] overflow-scroll mt-2",
              table: "min-h-[20px]",
            }}
          >
            <TableHeader>
              <TableColumn>Employee</TableColumn>
              <TableColumn>Task</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {EmployeeStatus.filter((itm) => itm.task !== "").map((itm) => (
                <>
                  <TableRow>
                    <TableCell>{itm.name}</TableCell>
                    <TableCell>{itm.task}</TableCell>
                    <TableCell>{itm.status}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="w-full p-2 rounded-md bg-slate-300">
          <h1 className="mb-2 font-bold">Leaves of Employees</h1>
          <Divider />
          <Table
            classNames={{
              base: "max-h-[300px] overflow-scroll mt-2",
              table: "min-h-[20px]",
            }}
          >
            <TableHeader>
              <TableColumn>Employee</TableColumn>
              <TableColumn>Date</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
          <TableBody>
                {
                  EmployeeLeaves.map((itm, index) => (
                    <>
                        <TableRow key={index + 1}>
                            <TableCell>{itm.name}</TableCell>
                            <TableCell>{itm.date}</TableCell>
                            <TableCell>{itm.status}</TableCell>
                        </TableRow>
                        </>
                    ))
                  }
          </TableBody>
          </Table>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.3 }}
        className="flex flex-col w-full gap-2 lg:flex-row"
      >
        <div className="w-full p-2 rounded-md">
          <h1 className="mb-2 font-bold">Meetings</h1>
          <Divider />
          {Meeting.length > 0 ? (
            <Table isStriped className="mt-2">
              <TableHeader>
                <TableColumn>Sn#</TableColumn>
                <TableColumn>Meeting</TableColumn>
                <TableColumn>Date</TableColumn>
              </TableHeader>
              <TableBody>
                {Meeting.map((itm, index) => (
                  <TableRow key={index + 1}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{itm.MeetingName}</TableCell>
                    <TableCell>{itm.MeetingDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center h-full font-mono">
              <Image src={NoResults} alt="NO RESULTS" width={200} />
              NO RESULTS FOUND!
            </div>
          )}
        </div>
        <Table1 />
      </motion.div>
      <div className="flex flex-row w-full h-auto gap-2 p-4 mt-2 font-mono rounded-md bg-slate-300">
        © 2021 EMS All Rights Reserved | Developed by&nbsp;Abdul Quddus |&nbsp;
        <Link href="https://github.com/EnderTonol">Github</Link> This Project Is
        Fully Open-Source
      </div>
    </div>
  );
}

export default StaffDashBoard;
