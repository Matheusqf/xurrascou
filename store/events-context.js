import { INITIAL_EVENTS } from "@/initial-events";
import React, { useState, createContext, useContext } from "react";

const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState(
    INITIAL_EVENTS.sort((a, b) => new Date(a.date) - new Date(b.date))
  );

  const getFeaturedEvents = () => {
    return events.filter((event) => event.isFeatured);
  };

  const getAllEvents = () => {
    return events;
  };

  const getFilteredEvents = (dateFilter) => {
    const { year, month } = dateFilter;

    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });

    return filteredEvents;
  };

  const getEventById = (id) => {
    return events.find((event) => event.id === id);
  };

  const addEvent = (newEvent) => {
    setEvents((prevEvents) =>
      [...prevEvents, newEvent].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    );
  };

  const addParticipant = (eventId, participant) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? { ...event, participants: [...event.participants, participant] }
          : event
      )
    );
  };

  const updateParticipant = (eventId, updatedParticipant) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              participants: event.participants.map((participant) =>
                participant.id === updatedParticipant.id
                  ? updatedParticipant
                  : participant
              ),
            }
          : event
      )
    );
  };

  const removeParticipant = (eventId, participantId) => {
    console.log("remover2: ", participantId);
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              participants: event.participants.filter(
                (participant) => participant.id !== participantId
              ),
            }
          : event
      )
    );
  };

  const updateParticipants = (eventId, newParticipants) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? { ...event, participants: newParticipants }
          : event
      )
    );
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        getFeaturedEvents,
        getAllEvents,
        getFilteredEvents,
        getEventById,
        addEvent,
        addParticipant,
        updateParticipant,
        removeParticipant,
        updateParticipants,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export const useEvents = () => useContext(EventsContext);
