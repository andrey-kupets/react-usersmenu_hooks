export default function ProvideFullUserInfo(props) {
    const {fullUserInfo} = props;
    const {id, name, username, email, phone, website} = fullUserInfo;
    return (
        <div>
            <h3><b>FULL USERINFO:</b></h3>
            <div>{id} - {name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <div>
                <button>Edit User</button>
                <button>Delete User</button>
            </div>
       </div>
    )
}