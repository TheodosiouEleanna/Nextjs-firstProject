import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventsList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventsList;
