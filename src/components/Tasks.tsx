import { useContext } from "react";
import { CheckBox } from "./CheckBox"
import { TrashSVG } from "./TrashSVG"
import { TaskContext } from "../context/TaskContext";

export function Tasks() {
    const { tasks, setTasks } = useContext(TaskContext)!;

    const handleCompleted = (id: number) => {
        const updatedTasks = tasks.map(t =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        );
        setTasks(updatedTasks);
    }

    const handleRemove = (id: number) => {
        const updatedTasks = tasks.filter(t => t.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <div className="tasks-wrapper">
            <div className="tasks">
                {tasks.filter(t => !t.isCompleted).map((ut) => (
                    <div key={ut.id} className="taskCard">
                        <div>
                            <CheckBox id={ut.id} onChange={() => handleCompleted(ut.id)} />
                            <p>{ut.title}</p>
                        </div>
                        <div className="svg">
                            <TrashSVG onClick={() => handleRemove(ut.id)} />
                        </div>
                    </div>
                ))}
            </div>
            {tasks.some(t => t.isCompleted) &&
                <div className="tasks-completed">
                    <p className="completed-title">Completed</p>
                    {tasks.filter(t => t.isCompleted).map(ct =>
                        <div key={ct.id} className="taskCard-completed">
                            <div>
                                <CheckBox id={ct.id} className="label-completed" onChange={() => handleCompleted(ct.id)} />
                                <p>{ct.title}</p>
                            </div>
                            <div>
                                <TrashSVG onClick={() => handleRemove(ct.id)} />
                            </div>
                        </div>
                    )}
                </div>}
        </div>
    )
}