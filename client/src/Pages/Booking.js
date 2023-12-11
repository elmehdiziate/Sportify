import React from "react";
import NavBar from "../Components/NavBar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Booking.css";


export default function Booking() {

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
			allDay: selectInfo.allDay
		  })
		}
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
	
	return (
		<>
            <NavBar/>

        <div className='BookingCalendar'>
		<FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin ]}
			className="fc"
            initialView='timeGridWeek'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            // initialEvents={INITIAL_EVENTS} 
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
