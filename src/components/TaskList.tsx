import { useEffect } from "react";
import { Form } from "./Form";
import { Tasks } from "./Tasks";

export function TaskList() {
    useEffect (() => {
        const preventScroll = () => {
          window.scrollTo(0, 0);
        };
    
        window.addEventListener('scroll', preventScroll);
    })
    
    return (
        <div className="container">
            <div className="list-tasks-container">
                <h1>Tarefas</h1>
                <div className="spacer"></div>
                <Tasks/>
                <Form />
            </div>
        </div>
    )
}