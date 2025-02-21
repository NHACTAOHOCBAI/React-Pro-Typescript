interface IProps {
    name?: string
}
const NewTodo = (props: IProps) => {
    const { name = "Nguyen Dang Phuc" } = props;
    return (
        <>
            <div style={{
                "display": "flex",
                "gap": "10px"
            }}>
                <input value={name} />
                <button>New</button>
            </div>
        </>
    )
}
export default NewTodo;