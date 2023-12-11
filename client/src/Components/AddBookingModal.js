import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../styles/Booking.css";
import axios from "axios";
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

export default function AddBookingModel({
	handleSuccess,
	handleError,
	open,
	handleSubmit,
    
}) {
	//vars
	const [user, setUser] = useState();
	const [field, setfield] = useState();
	const [status, setStatus] = useState();
	const [starttime, setStarttime] = useState();
	const [endtime, setEndtime] = useState();
	const [date, setDate] = useState();
	//   const [submit, setSubmit] = useState(false);

	const handleClose = () => {
		resetData();
		handleSubmit(false);
	};

	const resetData = () => {
		setUser();
		setfield();
		setEndtime();
		setStarttime();
		setDate();
		setStatus();
	};

	useEffect(() => {}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = {
				user,
				field,
				status,
				starttime,
				endtime,
				date,
			};
			console.log(body);
            // const req= await axios.get("http://localhost:8000/auth/login/success");
            // console.log(req);
            const userrequest = await axios.get("http://localhost:8000/users/current");
            
            console.log(userrequest);
			const responce = await axios.post("http://localhost:8000/booking", body);
			console.log(responce);
			handleSuccess();
		} catch (err) {
			console.log(err);
			handleError(err);
		}
		handleClose();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={"modalStyle"} sx={style}>
					<h1 style={{ marginBottom: 20 }}>Add a Booking</h1>
					<TextField
						id="outlined-basic"
						label="Team Name"
						variant="outlined"
						value={field}
						onChange={(e) => {
							setfield(e.target.value);
						}}
					/>
					<br></br>
					<TextField
						id="outlined-basic"
						label="User"
						variant="outlined"

						value={user}
						onChange={(e) => {
							setUser(e.target.value);
						}}
					/>
					<br></br>

					<TextField
						id="outlined-basic"
						label="Date"
						variant="outlined"
						value={date}
						onChange={(e) => {
							setDate(e.target.value);
						}}
					/>
					<br></br>

					<TextField
						id="outlined-basic"
						label="Start Time"
						variant="outlined"
						value={starttime}
						onChange={(e) => {
							setStarttime(e.target.value);
						}}
					/>
					<br></br>

					<TextField
						id="outlined-basic"
						label="End Time"
						variant="outlined"
						value={endtime}
						onChange={(e) => {
							setEndtime(e.target.value);
						}}
					/>
					{/* <TimePicker label="Basic time picker" /> */}
					<br></br>

					<div className="ModalButtons">
						<Button
							variant="contained"
							onClick={handleClose}
							sx={{
								backgroundColor: "#171c26",
								"&:hover": {
									backgroundColor: "#364258",
									color: "#fff",
								},
							}}
						>
							Cancel
						</Button>
						<Button
							variant="contained"
							onClick={onSubmit}
							style={{ marginLeft: 15 }}
							sx={{
								backgroundColor: "#54B435",
								"&:hover": {
									backgroundColor: "#69e042",
									color: "#fff",
								},
							}}
						>
							Submit
						</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
