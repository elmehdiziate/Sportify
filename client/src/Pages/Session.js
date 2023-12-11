import React, { useState } from 'react';
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
    const [rows, setRows] = useState([
        { date: '18/11/2023', startTime: '00:00', endTime: '01:00', field: 'Field data' },
        { date: '18/11/2023', startTime: '00:00', endTime: '01:00', field: 'Field data' },
    ]);

    

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDelete = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
        handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                                    <TableCell>Date</TableCell>
                                    <TableCell>Start Time</TableCell>
                                    <TableCell>End Time</TableCell>
                                    <TableCell>Field</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} className="tableRow">
                                        <TableCell component="th" scope="row" className="tableCell">
                                            <IconButton
                                                aria-label="actions"
                                                className="iconButton"
                                                onClick={handleClick}
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
                                                <MenuItem onClick={() => handleDelete(index)}>Cancel Session</MenuItem>
                                                <MenuItem onClick={handleClose}>Confirm Session</MenuItem>
                                            </Menu>
                                        </TableCell>
                                        <TableCell className="tableCell">{row.date}</TableCell>
                                        <TableCell className="tableCell">{row.startTime}</TableCell>
                                        <TableCell className="tableCell">{row.endTime}</TableCell>
                                        <TableCell className="tableCell">{row.field}</TableCell>
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
