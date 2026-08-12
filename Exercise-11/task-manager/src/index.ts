const command = process.argv[2];
const title = process.argv[3];

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];

function addTask(task: Task) {
  tasks.push(task);
  console.log("Adding task:", task);
  console.log(tasks);
}
function listTasks() {
  tasks.forEach((task) => {
    console.log("Listing tasks...", task.id);
  });
}
function deleteTask() {
  console.log("Deleting task...");
}
function completeTask() {
  console.log("Completing task...");
}

if (command === "add") {
  if (!title) {
    console.log("Provide a task title");
  } else {
    const task: Task = {
      id: 1,
      title,
      completed: false,
    };
    addTask(task);
  }
} else if (command === "list") {
  listTasks();
} else if (command === "delete") {
  deleteTask();
} else if (command === "complete") {
  completeTask();
}
