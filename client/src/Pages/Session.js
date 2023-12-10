import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/Session.css'; // Import the CSS file
import NavBar from "../Components/NavBar";


function Session() {
    const rows = [
        { date: '18/11/2023', startTime: '00:00', endTime: '01:00', field: 'Field data' },
        { date: '18/11/2023', startTime: '00:00', endTime: '01:00', field: 'Field data' },
        { date: '18/11/2023', startTime: '00:00', endTime: '01:00', field: 'Field data' },
        { date: '18/11/2023', startTime: '00:00', endTime: '01:00', field: 'Field data' },
        
    ];

    return (
        <div className="pageLayout">
            <div className="navBar">
                <NavBar/>
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
                                    <TableRow
                                        key={index}
                                        className="tableRow"
                                    >
                                        <TableCell component="th" scope="row" className="tableCell">
                                            <IconButton aria-label="actions" className="iconButton">
                                                <MoreHorizIcon className="actionIcon" />
                                            </IconButton>
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