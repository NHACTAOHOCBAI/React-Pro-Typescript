interface IProps {
    todos: {
        id: number
        title: string,
        isComplete: boolean
    }[]
}
const TodoData = (props: IProps) => {
    const { todos } = props;
    return (
        <>
            {todos.map((values) => {
                return (
                    <div>{values.title}</div>
                )
            })}
        </>
    )
}
export default TodoData;