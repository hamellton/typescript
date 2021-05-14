import React, {useEffect, useState} from 'react'
import TodoForm from "../Components/TodoForm"
import TodoList from "../Components/TodoList"
import {ITodo} from "../interfaces"

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prevState => [newTodo, ...prevState])
    }

    const toggleHandler = (id: number) => {
        setTodos((prevState) => prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }
            )
        )
    }

    const deleteHandler = (id: number) => {
        const shouldDelete = window.confirm('Вы уверенны, что хотите удалить элеемент?')
        if (shouldDelete) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id))
        }
    }
    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler}/>
            <TodoList
                todos={todos}
                onDelete={deleteHandler}
                onToggle={toggleHandler}
            />
        </React.Fragment>
    )
}

export default TodosPage