import { createContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface task {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface TaskContextTyper {
    tasks: task[];
    setTasks: Dispatch<SetStateAction<task[]>>;
}

export const TaskContext = createContext<TaskContextTyper | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<task[]>(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    const TaskContextValue = {
        tasks, setTasks
    };

    return (
        <TaskContext.Provider value={TaskContextValue}>
            {children}
        </TaskContext.Provider>
    )
}