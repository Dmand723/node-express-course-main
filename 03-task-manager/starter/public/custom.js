let curPath = "tasks";
function switchShowingTasks(value) {
  switch (value) {
    case "all":
      curPath = "tasks";
      break;
    case "completed":
      curPath = "tasks/completed";
      break;
    case "incompleted":
      curPath = "tasks/incompleted";
      break;
  }
}
