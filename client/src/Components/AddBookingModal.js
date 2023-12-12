import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../styles/Booking.css";
import axios from "axios";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import FilterFields from "../Components/FilterFields";

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
	const [field, setField] = useState("");
	const [fields, setFields] = useState([]);
	const [user, setUser] = useState();
	const [status, setStatus] = useState();
	const [date, setDate] = useState();
	const [starttime, setStarttime] = useState();
	const [endtime, setEndtime] = useState();
	const [players, setPlayers] = useState(0);
	const [teamName, setTeamName] = useState("");
	//   const [submit, setSubmit] = useState(false);

	const handleClose = () => {
		resetData();
		handleSubmit(false);
	};

	const resetData = () => {
		setUser();
		setEndtime();
		setStarttime();
		setStatus();
		setDate();
		setPlayers(0);
		setTeamName("");
		setField("");
	};
	const handleFilter =  (Field) => {
		setField(Field);
		console.log(field);
   };


   const getField = async () => {
	   try {
		   const url = `http://localhost:8000/fields/`;
		   const { data } = await axios.get(url);
		   setFields(data);
	   } catch (err) {
		   console.log(err);
	   }
   };

	useEffect(() => {
		getField();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("submit");
		try {
			
			const userrequest = await axios.get(
				"http://localhost:8000/auth/login/success", {withCredentials: true}
			);
			const userId = userrequest.data.user._id;
			const body = {
				user: userId,
				field: field,
				status: "Pending",
				date: date.toISOString().replace(/T.*$/, ""),
				starttime: date.toISOString().replace(/T.*$/, "") + "T" + starttime.toISOString().split("T")[1],
				endtime: date.toISOString().replace(/T.*$/, "") + "T" + endtime.toISOString().split("T")[1],
				teamName,
				players,

			};
			console.log(userrequest);
			console.log('bodyyyyyyyy', body);
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
					<FilterFields uniqueField={fields} onFilter={handleFilter} />
					<br/>
					<TextField
						id="outlined-basic"
						label="Team Name"
						variant="outlined"
						value={teamName}
						onChange={(e) => {
							setTeamName(e.target.value);
						}}
					/>
					<br/>
					<TextField
						id="outlined-basic"
						label="Number of Players"
						variant="outlined"
						value={players}
						type="number"
						onChange={(e) => {
							setPlayers(e.target.value);
						}}
					/>
					<br />
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateField
							label="Date"
							value={date}
							onChange={(date) => {
								setDate(date);
							}}
						/>
					</LocalizationProvider>

					<br />
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<TimeField
							label="Start Time"
							value={starttime}
							ampm={false}
							masks={{ hours: "HH", minutes: "mm" }}
							onChange={(value) => {
								setStarttime(value);
							}}
						/>
					</LocalizationProvider>

					<br />
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<TimeField
							label="End Time"
							value={endtime}
							ampm={false}
							masks={{ hours: "HH", minutes: "mm" }}
							onChange={(value) => {
								setEndtime(value);
							}}
						/>
					</LocalizationProvider>


					<br/>

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
