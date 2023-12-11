import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NavBar from "../Components/NavBar";
import '../styles/Session.css'; // Import the CSS file

function Session() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [rows, setRows] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

    const fetchFieldDetails = async (fieldId) => {
        try {
            const response = await axios.get(`http://localhost:8000/fields/${fieldId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching field details:", error);
            return null; // Or return a default value
        }
    };


    const load = async () => {
        try {
            const r = await axios.get(`http://localhost:8000/auth/login/success`, { withCredentials: true });
            console.log(r.data);
            const ID = r.data.user._id;
            const response = await axios.get(`http://localhost:8000/booking/user/${ID}`);
            console.log(response.data);
            const bookingsWithFieldDetails = await Promise.all(response.data.map(async (booking) => {
                const fieldDetails = await fetchFieldDetails(booking.field);
                return {
                    id: booking._id,
                    date: booking.date.split('T')[0],
                    startTime: booking.starttime,
                    endTime: booking.endtime,
                    field: fieldDetails ? fieldDetails.name : "Field Not Found",
                    status: booking.status,
                };
            }));

            setRows(bookingsWithFieldDetails);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };


    useEffect(() => {
        console.log("Fetching data...");
        const fetchData = async () => {
            load();
        };

        fetchData();
    }, []);




    const open = Boolean(anchorEl);

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setCurrentIndex(index); // Set the current index
    };

    const handleDelete = async () => {
        if (currentIndex !== null) {
            const bookingId = rows[currentIndex].id; // Get the booking ID
            try {
                await axios.delete(`http://localhost:8000/booking/${bookingId}`);
                // If delete is successful, update the UI
                const updatedRows = rows.filter((_, index) => index !== currentIndex);
                setRows(updatedRows);
            } catch (error) {
                console.error("Error deleting booking:", error);
                // Handle error appropriately (e.g., show an error message)
            }
        }
        handleClose();
    };
    

    const handleClose = () => {
        setAnchorEl(null);
        setCurrentIndex(null); // Reset the current index
    };

    return (
        <div className="pageLayout">
            <div className="navBar">
                <NavBar />
            </div>
            <div className="contentArea">
                <div className="Session">
                    <TableContainer component={Paper} className="tableContainer">
                        <Table className="table" aria-label="simple table">
                            <TableHead className="tableHead">
                                <TableRow>
                                    <TableCell>Action</TableCell>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Start Time</TableCell>
                                    <TableCell>End Time</TableCell>
                                    <TableCell>Field</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} className="tableRow">
                                        <TableCell component="th" scope="row" className="tableCell">
                                            <IconButton
                                                aria-label="actions"
                                                className="iconButton"
                                                onClick={(event) => handleClick(event, index)}
                                            >
                                                <MoreHorizIcon className="actionIcon" />
                                            </IconButton>
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleDelete}>Cancel Session</MenuItem>
                                                <MenuItem onClick={handleClose}>Confirm Session</MenuItem>
                                            </Menu>
                                        </TableCell>
                                        <TableCell className="tableCell">{row.id}</TableCell>
                                        <TableCell className="tableCell">{row.date}</TableCell>
                                        <TableCell className="tableCell">{row.startTime}</TableCell>
                                        <TableCell className="tableCell">{row.endTime}</TableCell>
                                        <TableCell className="tableCell">{row.field}</TableCell>
                                        <TableCell className="tableCell">{row.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

export default Session;
