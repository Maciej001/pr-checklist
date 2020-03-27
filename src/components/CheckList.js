import React, { useState } from "react";
import { CheckListContainer } from "./containers";
import checklist from "../checklist";
import Task from "./Task";
import AllDone from "./AllDone";

const CheckList = () => {
  const [checks, setChecks] = useState(
    checklist.reduce(
      (acc, task) => ({ ...acc, [task.id]: { ...task, checked: false } }),
      {}
    )
  );

  const allChecked = Object.values(checks).every(task => task.checked);

  const onToggle = id => {
    const checklist = {
      ...checks,
      [id]: {
        ...checks[id],
        checked: !checks[id].checked
      }
    };
    setChecks(checklist);
  };

  return (
    <CheckListContainer>
      {!allChecked ? (
        <AllDone />
      ) : (
        checklist.map(task => (
          <Task key={task.id} task={checks[task.id]} onToggle={onToggle} />
        ))
      )}
    </CheckListContainer>
  );
};

export default CheckList;
