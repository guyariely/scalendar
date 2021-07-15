const initialData = {
  tickets: {
    "task-1": {
      id: "task-1",
      description: "Create your first task!",
      theme: "orange",
      tags: {},
    },
    "task-2": {
      id: "task-2",
      description: "Organize your tasks throughout the week",
      theme: "blue",
      tags: {},
    },
    "task-3": {
      id: "task-3",
      description: "Press the moon button to toggle dark mode",
      theme: "red",
      tags: {},
    },
  },
  columns: {
    0: {
      id: "0",
      name: "dock",
      ticketIds: ["task-1", "task-2", "task-3"],
    },
    1: {
      id: "1",
      name: "SUN",
      ticketIds: [],
    },
    2: {
      id: "2",
      name: "MON",
      ticketIds: [],
    },
    3: {
      id: "3",
      name: "TUE",
      ticketIds: [],
    },
    4: {
      id: "4",
      name: "WED",
      ticketIds: [],
    },
    5: {
      id: "5",
      name: "THU",
      ticketIds: [],
    },
    6: {
      id: "6",
      name: "FRI",
      ticketIds: [],
    },
    7: {
      id: "7",
      name: "SAT",
      ticketIds: [],
    },
  },
};

export default initialData;
