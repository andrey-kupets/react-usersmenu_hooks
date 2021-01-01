export default function  RenderUser(props) {
    const {oneUser, oneUser: {id, name}, details} = props;
    return (
        <div>
            {id} - {name}
            <button onClick={() => details(oneUser)}>details...</button>
        </div>
    )
}