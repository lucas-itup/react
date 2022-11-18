import React from "react";
import Checkbox from "./Checkbox";
const TaskList = () => {
return <div>
        Task List
        <Checkbox></Checkbox>
        <TaskList list={list} setList={setList} />
        </div>
}

export default TaskList;