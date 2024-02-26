export const tokenStorageKey = "token";
export const nameStorageKey = "userName";

export const analyticsCard1Titles = [
  { title: "Backlog Tasks", key: "backlogTasks" },
  { title: "To-Do Tasks", key: "todoTasks" },
  { title: "In-Progress Tasks", key: "inProgressTasks" },
  { title: "Completed Tasks", key: "completedTasks" },
];

export const priorityKeyMap={
    low:"lowPriority",
    medium:"moderatePriority",
    high:"highPriority"

}

export const analyticsCard2Titles = [
  { title: "Low Priority", key: priorityKeyMap.low },
  { title: "Moderate Priority", key: priorityKeyMap.medium },
  { title: "High Priority", key: priorityKeyMap.high },
  { title: "Due Date Tasks", key: "dueTasks" },
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

