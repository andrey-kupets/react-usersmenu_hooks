import  { useEffect, useState } from 'react';
import './UsersList.css';
import { withRouter } from "react-router-dom";
import actFetch from "../../services/ActFetch";
import RenderUser from "../user/User";
import Loading from "../../services/loading/Loading";
import ProvideFullUserInfo from "../full-userinfo/FullUserInfo";
import EditUserWindow from "../editUser-window/EditUserWindow";
import CreateUserWindow from "../createUser-window/CreateUserWindow";

function ActUserList(props) {
    const [users, setUsers] = useState(null);
    const [fullUserInfo, setFullUserInfo] = useState(null);
    const [editUserWindow, setEditUserWindow] = useState('');
    const [createUserWindow, setCreateUserWindow] = useState('');

    useEffect(() => {
        const {match: {url}} = props;
        actFetch(url).then(json => setUsers(json))
    }, []);

    const clickForDetails = (info) => {
        setFullUserInfo(info);
    };

    const showEditUserWindow = () => setEditUserWindow('visible');

    const saveEditUser = (btnName, editedUser) => {
        if (btnName === 'save') {
            const updatedUsers = users.filter(user => user.id !== editedUser.id);
            updatedUsers.push(editedUser);
            setUsers(updatedUsers);
            updatedUsers.sort((a, b) => a.id - b.id);
            clickForDetails(editedUser)
            }
            setEditUserWindow();
    };

    const deleteUser = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        console.log(newUsers)
        setUsers(newUsers);
        setFullUserInfo();
        setEditUserWindow();
    };

    const showCreateUserWindow = () => {
        setCreateUserWindow('visible');
    };

    const createUser = (btnName, createdUser) => {
        if (btnName === 'create') {
            createdUser.id = users[users.length - 1].id + 1;
            users.push(createdUser);
            setUsers(users);
        }
        setCreateUserWindow();
    };

    if (users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {!!users && users.map(user => <RenderUser oneUser={user} key={user.id} details={clickForDetails}/>)}
                    <button onClick={showCreateUserWindow}>Create User</button>
                </div>
                {!!fullUserInfo && <ProvideFullUserInfo fullUserInfo={fullUserInfo} showEditUserWindow={showEditUserWindow} deleteUser={deleteUser}/>}
                {!!editUserWindow && <EditUserWindow fullUserInfo={fullUserInfo} saveEditUser={saveEditUser}/>}
                {!!createUserWindow && <CreateUserWindow createUser={createUser}/>}
            </div>
        );
    } return (
        <div>
            <h3>Pending USERS LIST:</h3>
            <Loading/>
        </div>
    );
}

export default withRouter(ActUserList);
