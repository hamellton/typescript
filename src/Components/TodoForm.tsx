import React, {useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle] = useState<string>('')
    // const changeHandler = (event: React.ChangeEvent <HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const addTodo = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // console.log(title)
            // setTitle('')
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }
    return (
        <div className="input-field mt3">
            <input
                type="text"
                id="title"
                placeholder="Введите название дела"
                ref={ref}
                // value={title}
                // onChange={changeHandler}
                onKeyPress={addTodo}
            />
            <label
                htmlFor="title"
                className="active"
            >
                Введите название дела
            </label>
            <ul>
                {/*{title}*/}
            </ul>
        </div>
    )
}

export default TodoForm