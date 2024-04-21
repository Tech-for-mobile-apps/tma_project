import React, { createContext, useState, useContext } from 'react';

// Create a Context for events
const EventContext = createContext();

// Create a provider component to manage and provide event data
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { date: '2024-04-15', description: 'Team meeting at noon' },
    { date: '2024-04-15', description: 'Doctor appointment at 3 pm' },
    { date: '2024-04-20', description: 'Project deadline' },
    { date: '2024-05-01', description: 'Company holiday' },
  ]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the Event context
export const useEvent = () => useContext(EventContext);
