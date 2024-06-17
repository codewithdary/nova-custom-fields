import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import daygridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

function CalenderFull() {
  const date = new Date();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const [events, setEvents] = useState([
    {
      title: "Business",
      start: `2024-${month}-05T13:00:00.000Z`,
      constraint: "businessHours",
      color: "#F5BA47",
      id: 1,
    },
    {
      title: "Event",
      start: `2024-${month}-14T13:00:00.000Z`,
      constraint: "businessHours",
      color: "#63C660",
      id: 2,
    },
    {
      title: "Meeting",
      start: `2024-${month}-17T13:00:00`,
      constraint: "availableForMeeting", // defined below
      color: "#936DFF",
      id: 3,
    },
    {
      title: "Business",
      start: `2024-${month}-17T13:00:00`,
      constraint: "businessHours",
      color: "#F5BA47",
      id: 4,
    },
    {
      title: "Event",
      start: `2024-${month}-17T13:00:00`,
      constraint: "businessHours",
      color: "#63C660",
      id: 5,
    },
    {
      title: "Meeting",
      start: `2024-${month}-17T13:00:00`,
      constraint: "availableForMeeting", // defined below
      color: "#936DFF",
      id: 6,
    },
  ]);

  const handleSelect = (info) => {
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          ...info,
        },
      ]);
    }
  };
  return (
    <section className="flex-1 2xl:mb-0 mb-6">
      <div className="w-full bg-white dark:bg-darkblack-600 sm:px-10 sm:py-5 p-3 rounded-lg">
        <div className="calender-wrapper w-full relative h-full">
          <div className="w-full absolute top-2 left-0 max-w-fit">
            <div className="flex justify-between items-center">
              <div className="calender-title">
                <h3 className="sm:text-2xl text-xl dark:text-white text-bgray-900 font-bold">
                  Calender
                </h3>
              </div>
            </div>
          </div>
          <div className="2xl:w-full lg:w-1/2 w-full rounded-lg bg-white dark:bg-darkblack-600 ">
            <div className="w-full">
              <FullCalendar
                selectable
                select={handleSelect}
                plugins={[
                  daygridPlugin,
                  interactionPlugin,
                  timeGridPlugin,
                  listPlugin,
                ]}
                views={["dayGridDay", "timeGridMonth", "dayGridWeek"]}
                headerToolbar={{
                  start: "dayGridMonth timeGridWeek timeGridDay listMonth",
                  center: "title",
                  end: "prev next",
                }}
                initialDate={new Date()} // using new Date(); and set your scheduled on event array
                navLinks={true} // can click day/week names to navigate views
                businessHours={true} // display business hours
                editable={false}
                events={events}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalenderFull;
