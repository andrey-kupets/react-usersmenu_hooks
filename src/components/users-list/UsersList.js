import React, { useEffect, useState } from 'react';
import './UsersList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import actFetch from "../../services/ActFetch";
import RenderUser from "../user/User";
import Loading from "../../services/loading/Loading";

function ActUserList(props) {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const {match: {url}} = props;
        actFetch(url).then(json => setUsers(json))
    }, [])

    if (users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>UserList:</h3>
                    {users && users.map(user => <RenderUser oneUser={user} key={user.id}/>)}
                </div>
                <div >1</div>
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
