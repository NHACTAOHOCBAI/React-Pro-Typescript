import TodoData from "./todoData"

const TodoList = () => {
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]
    return (
        <>
            <div>Todo List :</div>
            <br />
            <TodoData
                todos={todos}
            />
        </>
    )
}
export default TodoList