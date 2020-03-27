import React from "react";
import { TaskContainer, TaskBody } from "./containers";
import Check from "./Check";

const Task = ({ task, onToggle }) => (
  <TaskContainer onClick={() => onToggle(task.id)} checked={task.checked}>
    <Check checked={task.checked} />

    <TaskBody>
      <h4>{task.label}</h4>
      {task.code && <span>{task.code}</span>}
    </TaskBody>
  </TaskContainer>
);

export default Task;
