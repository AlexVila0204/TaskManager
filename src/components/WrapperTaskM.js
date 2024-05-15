import React, { useState } from "react";
import { FormsTaskM } from "./FormsTaskM";
import { v4 as uuidv4 } from "uuid";
import { TaskManager } from "./TaskManager";
uuidv4();
export const WrapperTaskM = () => {
  const [taskMade, setTaskMade] = useState([]);
  const addTarea = (taskParameter) => {
    setTaskMade([
      ...taskMade,
      { id: uuidv4(), task: taskParameter, done: false },
    ]);
    console.log(taskMade);
  };
  const deleteAllTaskMade = (id) => {
    setTaskMade([]);
  }
  const checkedTask = (id) => {
    const updatedTasks = taskMade.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTaskMade(updatedTasks);
    console.log(taskMade);
  }
  const deleteCompleted = () => {
    const updatedTasks = taskMade.filter((task) => !task.done);
    setTaskMade(updatedTasks);
  }
  return (
    <div className="WrapperTaskM">
      <h1>Tareas</h1>
      <FormsTaskM addTarea={addTarea} />
      {taskMade.map((task, index) => (
        <TaskManager key={index} task={task} checkedTask={checkedTask} isChecked={task.done}/>
      ))}
      <div className="buttonGroup">
        <button className="deleteAllButton" onClick={deleteAllTaskMade}>Eliminar Todo</button>
        <button className="deleteDoneButton" onClick={deleteCompleted}>Eliminar Completados</button>
      </div>
    </div>
  );
};
