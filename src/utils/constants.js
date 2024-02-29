export const tokenStorageKey = "token";
export const nameStorageKey = "userName";

export const analyticsCard1Titles = [
  { title: "Backlog Tasks", key: "backlog" },
  { title: "To-Do Tasks", key: "toDo" },
  { title: "In-Progress Tasks", key: "inProgress" },
  { title: "Completed Tasks", key: "completed" },
];

export const priorityKeyMap={
    low:"low",
    medium:"medium",
    high:"high"

}

export const analyticsCard2Titles = [
  { title: "Low Priority", key: priorityKeyMap.low },
  { title: "Moderate Priority", key: priorityKeyMap.medium },
  { title: "High Priority", key: priorityKeyMap.high },
  { title: "Due Date Tasks", key: "dueDate" },
];

export const priorityColorMap={
  low:"#63C05B",
  medium:"#18B0FF",
  high:"#FF2473",
}

export const durationFilterText={}

export const taskStatus = [
    { title: "Backlog", status: "backlog" },
    { title: "To Do", status: "todo" },
    { title: "In progress", status: "inProgress" },
    { title: "Done", status: "completed" },
  ];

