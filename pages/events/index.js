import React, { Fragment, useState } from "react";
import { getAllEvents, getFilteredEvents } from "../data/dummyData";
import EventList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const router = useRouter();
  const [events, setEvents] = useState(getAllEvents());
  console.log({ events });

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
    // const filteredEvents = getFilteredEvents({
    //   year,
    //   month,
    // });
    // setEvents(filteredEvents);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};
export default AllEventsPage;
