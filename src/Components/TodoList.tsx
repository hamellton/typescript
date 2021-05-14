import React from 'react'
import {ITodo} from "../interfaces"

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void
    onDelete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, onDelete, onToggle}) => {
    return (
        <ul>
            {todos.map((todoLi) => {

                const classes = ['todo']
                if (todoLi.completed) {
                    classes.push('completed')
                }

                const deleteHandler = (event: React.MouseEvent, id: number) => {
                    event.preventDefault()

                    onDelete(id)
                }

                return (
                    <li className={classes.join(' ')} key={todoLi.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todoLi.completed}
                                onChange={onToggle.bind(null, todoLi.id)}
                            />
                            <span>{todoLi.title}</span>
                            <i className="material-icons red-text"
                               onClick={event => deleteHandler(event, todoLi.id)} >delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList