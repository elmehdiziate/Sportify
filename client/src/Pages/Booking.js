import React, { useEffect, useState } from 'react';
import NavBar from "../Components/NavBar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/Booking.css";
import AddBookingModel from "../Components/AddBookingModal";
import axios from 'axios';

export default function Booking() {

	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState([{}]);

	const handleDateSelect = (selectInfo) => {
		setOpen(true);
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (true) {
			calendarApi.addEvent({
				id: 1234,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
			});
		}
	};


	const handleEventClick = (clickInfo) => {
		alert(clickInfo.event.title);
	};
	const handleEvents = (events) => {
		console.log(events);
	};

	function renderEventContent(eventInfo) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}

	const getEvents = async () => {
		try {
			const response = await axios.get("http://localhost:8000/booking");
			const jsonData = await response.data;
			setEvents([jsonData]);
			
		} catch (err) {
			console.error(err.message);
		}
	}

	useEffect(() => {
		getEvents();
	}, []);

	const handleSuccess = () => {
		setOpen(true);
	};

	const handleError = (error) => {
		console.log(error);
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
					// initialEvents={events}
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
