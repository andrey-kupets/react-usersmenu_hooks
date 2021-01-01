import React, {useEffect, useState} from 'react';
import './UsersList.css';
import {withRouter} from "react-router-dom";
import actFetch from "../../services/ActFetch";
import RenderUser from "../user/User";
import Loading from "../../services/loading/Loading";
import ProvideFullUserInfo from "../full-userinfo/FullUserInfo";

function ActUserList(props) {
    const [users, setUsers] = useState(null);
    const [fullUserInfo, setFullUserInfo] = useState(null);

    const clickForDetails = (info) => {
        setFullUserInfo(info);
    }

    useEffect(() => {
        const {match: {url}} = props;
        actFetch(url).then(json => setUsers(json))
    }, [])

    if (users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {users && users.map(user => <RenderUser oneUser={user} key={user.id} details={clickForDetails}/>)}
                    <button>Create User</button>
                </div>
                <div>
                    {fullUserInfo && <ProvideFullUserInfo fullUserInfo={fullUserInfo}/>}
                </div>
                <div>1</div>
                <div>1</div>
            </div>
        );
    } return (
        <div>
            <h3>Pending UserList</h3>
            <Loading/>
        </div>
    )
}

export default withRouter(ActUserList);
