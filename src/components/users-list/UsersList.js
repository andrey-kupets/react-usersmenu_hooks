import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

function ActUserList() {
    return (
        <div className={'parent'}>
            <div className={'column'}>1</div>
            <div className={'column'}>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    );
}

export default withRouter(ActUserList);
