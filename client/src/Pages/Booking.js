import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/Booking.css";

import axios from "axios";
import AddBookingModel from "../Components/AddBookingModal";

export default function Booking() {

	const [open, setOpen] = useState(false);


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

	useEffect(() => {
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
