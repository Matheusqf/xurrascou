import React, { useState, createContext, useContext } from "react";

const INITIAL_EVENTS = [
  {
    id: "e1",
    title: "Churrasco de Verão",
    description:
      "Todos estão convidados! Sim, todos! Essa será uma ótima celebração de verão ideal para toda a família.",
    location: "Rua 25, 12345 Fortaleza",
    date: "2023-05-20",
    image: "images/churrasco1.jpg",
    isFeatured: true,
    participants: [
      {
        name: "Matheus de Queiroz",
        id: 1,
        value: 50,
        isConfirmed: true,
      },
      {
        name: "Maria Clara",
        id: 2,
        value: 60,
        isConfirmed: true,
      },
      {
        name: "Tobias",
        id: 3,
        value: 30,
        isConfirmed: false,
      },
      {
        name: "Sophia",
        id: 4,
        value: 40,
        isConfirmed: false,
      },
    ],
  },
  {
    id: "e2",
    title: "Aniversário da empresa",
    description:
      "Sabemos que a empresa está super unida. Vamos fazer um churrasco inesquecível para todos da empresa! Contamos com a sua presença!",
    location: "Vizinhança 5, 98765 São Paulo",
    date: "2023-05-30",
    image: "images/churrasco2.jpg",
    isFeatured: true,
    participants: [],
  },
  {
    id: "e3",
    title: "Jogo do Brasil",
    description:
      "Churrasco, Futebol e Cerveja. Nada melhor do que essa combinaçao para começar o mês, certo? Esperamos você!",
    location: "Avenida Mauro Ramos 950, 10115 Florianópolis",
    date: "2023-04-01",
    image: "images/churrasco3.jpg",
    isFeatured: true,
    participants: [],
  },
  {
    id: "e4",
    title: "Churrasco da Independência",
    description:
      "Vamos celebrar a Independência do Brasil com muita alegria e, claro, um churrasco de respeito! Traga sua família, amigos e a sua melhor disposição para essa festa incrível.",
    location: "Parque da Independência, São Paulo",
    date: "2023-09-07",
    image: "images/churrasco4.jpg",
    isFeatured: false,
    participants: [
      {
        name: "João Silva",
        id: 5,
        value: 70,
        isConfirmed: true,
      },
      {
        name: "Ana Maria",
        id: 6,
        value: 50,
        isConfirmed: true,
      },
      {
        name: "Lucas Oliveira",
        id: 7,
        value: 80,
        isConfirmed: false,
      },
      {
        name: "Beatriz Costa",
        id: 8,
        value: 60,
        isConfirmed: false,
      },
    ],
  },
  {
    id: "e5",
    title: "Churrasco de Carnaval",
    description:
      "Que tal um churrasco para celebrar o Carnaval? Vamos celebrar a maior festa brasileira com muita música, dança e claro, um delicioso churrasco!",
    location: "Av. Atlântica, 12345, Rio de Janeiro",
    date: "2023-02-25",
    image: "images/churrasco5.jpg",
    isFeatured: true,
    participants: [
      {
        name: "Paulo Henrique",
        id: 9,
        value: 55,
        isConfirmed: true,
      },
      {
        name: "Carla Fernanda",
        id: 10,
        value: 65,
        isConfirmed: false,
      },
    ],
  },
  {
    id: "e6",
    title: "Confraternização de Fim de Ano",
    description:
      "Vamos comemorar o encerramento de mais um ano com um churrasco inesquecível! Esperamos você para celebrar conosco!",
    location: "Rua das Flores, 987, Curitiba",
    date: "2023-12-20",
    image: "images/churrasco6.jpg",
    isFeatured: false,
    participants: [],
  },
  {
    id: "e7",
    title: "Churrasco do Dia do Trabalhador",
    description:
      "Nada melhor do que celebrar o Dia do Trabalhador com um churrasco entre amigos. Contamos com sua presença!",
    location: "Praça da Liberdade, Belo Horizonte",
    date: "2023-05-01",
    image: "images/churrasco7.jpg",
    isFeatured: false,
    participants: [],
  },
  {
    id: "e8",
    title: "Churrasco Pré-Jogo",
    description:
      "Que tal um churrasco antes do grande jogo? Venha torcer conosco!",
    location: "Rua São Jorge, 777, São Paulo",
    date: "2023-06-15",
    image: "images/churrasco8.jpg",
    isFeatured: false,
    participants: [],
  },
  {
    id: "e9",
    title: "Churrasco da Primavera",
    description:
      "Vamos celebrar a chegada da primavera com um churrasco ao ar livre! Traga sua família e vamos juntos aproveitar essa estação tão especial.",
    location: "Parque do Ibirapuera, São Paulo",
    date: "2023-09-23",
    image: "images/churrasco9.jpg",
    isFeatured: false,
    participants: [],
  },
  {
    id: "e10",
    title: "Churrasco de São João",
    description:
      "Venha celebrar o São João conosco! Teremos um churrasco junino com muita música e diversão. Não perca!",
    location: "Rua Direita, 150, Salvador",
    date: "2023-06-24",
    image: "images/churrasco10.jpg",
    isFeatured: false,
    participants: [
      {
        name: "João Pedro",
        id: 11,
        value: 50,
        isConfirmed: true,
      },
      {
        name: "Ana Beatriz",
        id: 12,
        value: 60,
        isConfirmed: false,
      },
      {
        name: "Felipe",
        id: 13,
        value: 55,
        isConfirmed: true,
      },
      {
        name: "Gabriela",
        id: 14,
        value: 65,
        isConfirmed: false,
      },
    ],
  },
  {
    id: "e11",
    title: "Churrasco de Aniversário",
    description:
      "Estamos celebrando o aniversário do Carlos com um grande churrasco. Venha comemorar conosco esta data especial!",
    location: "Av. Paulista, 1234, São Paulo",
    date: "2023-07-15",
    image: "images/churrasco11.jpg",
    isFeatured: false,
    participants: [
      {
        name: "Carlos",
        id: 15,
        value: 70,
        isConfirmed: true,
      },
      {
        name: "Juliana",
        id: 16,
        value: 75,
        isConfirmed: true,
      },
      {
        name: "Lucas",
        id: 17,
        value: 60,
        isConfirmed: false,
      },
    ],
  },
  {
    id: "e12",
    title: "Churrasco de Confraternização do Trabalho",
    description:
      "Vamos celebrar o sucesso da nossa equipe com um churrasco. Contamos com a sua presença!",
    location: "Rua das Palmeiras, 567, Campinas",
    date: "2023-08-20",
    image: "images/churrasco12.jpg",
    isFeatured: false,
    participants: [
      {
        name: "Roberto",
        id: 18,
        value: 65,
        isConfirmed: true,
      },
      {
        name: "Mariana",
        id: 19,
        value: 70,
        isConfirmed: false,
      },
      {
        name: "Rodrigo",
        id: 20,
        value: 55,
        isConfirmed: false,
      },
      {
        name: "Fernanda",
        id: 21,
        value: 65,
        isConfirmed: true,
      },
    ],
  },
];

const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState(INITIAL_EVENTS.sort((a, b) => new Date(a.date) - new Date(b.date)));

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
    setEvents((prevEvents) => [...prevEvents, newEvent].sort((a, b) => new Date(a.date) - new Date(b.date)));
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
