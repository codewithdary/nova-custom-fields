import FullCalendar from '@fullcalendar/react'
import React, {useState} from "react";
// import listPlugin from "@fullcalendar/list";
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'
import {EventViewDrawer} from "../Event/EventViewDrawer.jsx";
import drawerOptions from "../../data/drawerOptions.jsx";
import {ThemeProvider} from "@material-tailwind/react";
import interactionPlugin from '@fullcalendar/interaction';
import {EventCreateDrawer} from "../Event/EventCreateDrawer.jsx";

function CalenderFull({ events }) {
    const [openViewRight, setViewOpenRight] = React.useState(false);
    const [openCreateRight, setCreateOpenRight] = React.useState(false);
    const [event, setEvent] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const openViewDrawerRight = () => setViewOpenRight(true);
    const closeViewDrawerRight = () => setViewOpenRight(false);

    const openCreateDrawerRight = () => setCreateOpenRight(true);
    const closeCreateDrawerRight = () => setCreateOpenRight(false);

    return (
      <ThemeProvider value={drawerOptions}>
          <section className="flex-1 2xl:mb-0 mb-6">
              <div className="w-full bg-lightest sm:py-5 rounded-lg">
                <div className="calender-wrapper w-full relative h-full">
                  <div className="w-full rounded-lg dark:bg-darkblack-600 border border-lightest">
                    <div className="w-full">
                        <FullCalendar
                          selectable
                          navLinks={false}
                          editable={true}
                          slotMinTime="06:00"
                          nowIndicator={true}
                          allDayContent={true}
                          businessHours={false}
                          displayEventEnd={true}
                          stickyHeaderDates={true}
                          eventColor="#152e4d"
                          events={events.data}
                          initialDate={new Date()}
                          buttonText={{
                              day: 'Day',
                              week: 'Week',
                              month: 'Month',
                          }}
                          plugins={[
                              googleCalendarPlugin,
                              timeGridPlugin,
                              dayGridPlugin,
                              interactionPlugin
                          ]}
                          dateClick={function(date) {
                              setSelectedDate(date.dateStr);
                              openCreateDrawerRight()
                          }}
                          headerToolbar={{
                            left: 'prev,next,today',
                            center: 'title',
                            right: 'timeGridDay,timeGridWeek,dayGridMonth'
                          }}
                          initialView='timeGridWeek'
                          eventClick={function(selected) {
                              setEvent(selected.event.extendedProps);
                              openViewDrawerRight()
                          }}
                          dayHeaderFormat={{
                              weekday: 'short',
                              month: 'numeric',
                              day: 'numeric',
                              omitCommas: true
                        }}
                        />
                    </div>
                  </div>
                </div>
              </div>

              {selectedDate && (
                  <EventCreateDrawer
                      selectedDate={selectedDate}
                      openRight={openCreateRight}
                      closeDrawerRight={closeCreateDrawerRight}
                  />
              )}

                {event && (
                    <EventViewDrawer
                        event={event}
                        openRight={openViewRight}
                        closeDrawerRight={closeViewDrawerRight}
                    />
                )}
          </section>
      </ThemeProvider>
  );
}

export default CalenderFull;
