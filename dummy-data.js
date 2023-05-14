const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Churrasco de Verão',
      description:
        'Todos estão convidados! Sim, todos! Essa será uma ótima celebração de verão ideal para toda a família.',
      location: 'Rua 25, 12345 Fortaleza',
      date: '2023-05-12',
      image: 'images/churrasco1.jpg',
      isFeatured: true,
      participants: [{
        name: "Matheus de Queiroz",
        id: 1,
        value: 50,
        isConfirmed: true
      },{
        name: "Maria Clara",
        id: 2,
        value: 60,
        isConfirmed: true
      },{
        name: "Tobias",
        id: 3,
        value: 30,
        isConfirmed: false
      },{
        name: "Sophia",
        id: 4,
        value: 40,
        isConfirmed: false
      },
    ]
    },
    {
      id: 'e2',
      title: 'Aniversário da empresa',
      description:
        "Sabemos que a empresa está super unida. Vamos fazer um churrasco inesquecível para todos da empresa! Contamos com a sua presença!",
      location: 'Vizinhança 5, 98765 São Paulo',
      date: '2023-05-30',
      image: 'images/churrasco2.jpg',
      isFeatured: false,
      participants: []
    },
    {
      id: 'e3',
      title: 'Jogo do Brasil',
      description:
        'Churrasco, Futebol e Cerveja. Nada melhor do que essa combinaçao para começar o mês, certo? Esperamos você!',
      location: 'Avenida Mauro Ramos 950, 10115 Florianópolis',
      date: '2023-04-01',
      image: 'images/churrasco3.jpg',
      isFeatured: true,
      participants: []
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }