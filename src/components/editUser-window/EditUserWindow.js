import React, {useState} from 'react';

export default function EditUserWindow(props) {
    const {fullUserInfo, fullUserInfo: {name, username, email, phone, website}, saveEditUser} = props;
    const [savedUsers, setSavedUsers] = useState();
    console.log(savedUsers)

    const inputName = (e) => setSavedUsers((prevState) => ({...prevState, name: e.target.value}));
    const inputUserName = (e) => setSavedUsers((prevState) => ({...prevState, username: e.target.value}));
    const inputEmail = (e) => setSavedUsers((prevState) => ({...prevState, email: e.target.value}));
    const inputPhone = (e) => setSavedUsers((prevState) => ({...prevState, phone: e.target.value}));
    const inputWebsite = (e) => setSavedUsers((prevState) => ({...prevState, website: e.target.value}));

    return (
        <div>
            <h3>USER EDITION MENU:</h3>
            <div>
                <label>Name:</label>
                <input onInput={inputName} type="text" defaultValue={name}/>
            </div>
            <div>
                <label>UserName:</label>
                <input onInput={inputUserName} type="text" defaultValue={username}/>
            </div>
            <div>
                <label>Email:</label>
                <input onInput={inputEmail} type="text" defaultValue={email}/>
            </div>
            <div>
                <label>Phone</label>
                <input onInput={inputPhone} type="text" defaultValue={phone}/>
            </div>
            <div>
                <label>Website</label>
                <input onInput={inputWebsite} type="text" defaultValue={website}/>
            </div>
            <div>
                <button onClick={() => saveEditUser('save', savedUsers)}>Save</button>
                <button onClick={saveEditUser}>Cancel</button>
            </div>
        </div>
    )
}