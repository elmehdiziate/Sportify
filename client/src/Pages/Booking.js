import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/Booking.css";
import AddBookingModel from "../Components/AddBookingModal";
import axios from "axios";
import FilterFields from "../Components/FilterFields";

export default function Booking() {
	const [fields, setFields] = useState([]);
	const [field, setField] = useState("");
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState([{}]);

	const handleDateSelect = (selectInfo) => {
		setOpen(true);
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); 
	};

	const handleEventClick = (clickInfo) => {
		alert(clickInfo.event.title);
	};

	function renderEventContent(eventInfo) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}
	const handleEvents = (events) => {
		console.log(events);
	};

	const getEvents = async () => {
		try {
			setTimeout(() => {}, 1000);

			const response = await axios.get(`http://localhost:8000/booking/field/${field}`);
			const jsonData = await response.data;
			console.log("json", jsonData);
			const ev = await jsonData.map((event) => ({
				id: event._id,
				title: event.teamName,
				start: event.starttime,
				end: event.endtime,
				status: event.status,
			}));
			setEvents(ev);
			console.log("ev", [ev]);
			await console.log("events", events);
		} catch (err) {
			console.error(err.message);
		}
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

	useEffect(() => {
		getEvents();
	}, [field]);

	const handleSuccess = () => {
		setOpen(true);
	};

	const handleError = (error) => {
		console.log(error);
	};
	const handleFilter = async (Field) => {
		setField(Field);
		console.log(field);
	};

	

	return (
		<>
			<NavBar />
			<AddBookingModel
				handleSuccess={handleSuccess}
				handleError={handleError}
				open={open}
				handleSubmit={setOpen}
			/>
			<div className="filter">
			<FilterFields 
				uniqueField={fields} onFilter={handleFilter}
			/>
			</div>
			<div className="BookingCalendar">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					className="fc"
					initialView="timeGridWeek"
					editable={true}
					selectable={true}
					selectMirror={true}
					dayMaxEvents={true}
					weekends={true}
					events={events}
					select={handleDateSelect}
					eventContent={renderEventContent}
					eventClick={handleEventClick}
					eventsSet={handleEvents}

					
					views={{
						timeGridWeek: {
							allDaySlot: false,
							slotMinTime: "08:00:00", // Show time starting from 8 am
							slotMaxTime: "24:00:00",
							// slotDuration: '02:00:00',
						},
					}}
				/>
			</div>
		</>
	);
}
