import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../Components/NavBar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "../styles/Booking.css";
import FilterFields from "../Components/FilterFields";
import AddBookingModel from "../Components/AddBookingModal";


export default function Booking() {
	const [fields, setFields] = useState([]);
	const [open, setOpen] = useState(false);

	  const handleDateSelect = (selectInfo) => {
		
		let title = prompt('Please enter a new title for your event')
		let calendarApi = selectInfo.view.calendar
	
		calendarApi.unselect() // clear date selection
	
		if (title) {
		  calendarApi.addEvent({
			id: 1234,
			title,
			start: selectInfo.startStr,
			end: selectInfo.endStr,
		  })
		}
		setOpen(true);
	  }
	
	  const handleEventClick = (clickInfo) => {
		alert(clickInfo.event.title)
	  }
	  const handleEvents = (events) => {
		console.log(events)
	  }
	

	  function renderEventContent(eventInfo) {
		return (
		  <>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		  </>
		)
	  }
	  const handleFilter = (selectedField) => {
		console.log(selectedField);
	  }

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

	const handleSuccess = () => {
		setOpen(true);
	};
			
	const handleError = (error) => {
		console.log(error);
	};
			
	return (
		<>
            <NavBar/>
			<AddBookingModel handleSuccess={handleSuccess} handleError={handleError} open={open} handleSubmit={setOpen}/>
        <div className='BookingCalendar'>
			<FilterFields uniqueField={fields} onFilter={handleFilter} />
		<FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin ]}
			className="fc"
            initialView='timeGridWeek'
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
                slotMinTime: '08:00:00', // Show time starting from 8 am
                slotMaxTime: '24:00:00',
              },
            }}

			
          />
        </div>    
		</>
	);
}
