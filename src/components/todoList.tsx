import TodoData from "./todoData"
import NewTodo from "./todoNew"

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
            <div style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "height": "100vh",
                "width": "100vw"
            }}>
                <div style={{
                    "border": "1px solid black",
                    "padding": "10px",
                    "borderRadius": "5px",
                    "display": "inline-block",
                    "height": "auto"
                }}>
                    <div>Todo List :</div>
                    <hr />
                    <NewTodo />
                    <TodoData
                        todos={todos}
                    />
                </div>
            </div>
        </>
    )
}
export default TodoList