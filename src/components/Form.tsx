import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext";

export function Form() {
    interface task {
        id: number;
        title: string;
        isCompleted: boolean;
    }

    const { tasks, setTasks } = useContext(TaskContext)!;
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const id: number = new Date().getTime();
        const newTask: task = {id: id, title: title, isCompleted: false}
        setTasks([...tasks, newTask]);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="form-add">
            <input type="text" placeholder="Escreva uma tarefa..." value={title} onChange={(e) => setTitle(e.target.value)} />
            <button>Adicionar</button>
        </form>
    )
}