import { useState } from 'react';

export default function CreateUserWindow(props) {
    const {createUser} = props;
    const initialState = {id: '...missed data', name: '...missed data', username: '...missed data', email: '...missed data', phone: '...missed data', website: '...missed data'};
    const [newUser, setNewUser] = useState(initialState);

    const inputName = (e) => setNewUser(prevState => ({...prevState, name: e.target.value}));
    const inputUsername = (e) => setNewUser(prevState => ({...prevState, username: e.target.value}));
    const inputEmail = (e) => setNewUser(prevState => ({...prevState, email: e.target.value}));
    const inputPhone = (e) => setNewUser(prevState => ({...prevState, phone: e.target.value}));
    const inputWebsite = (e) => setNewUser(prevState => ({...prevState, website: e.target.value}));

    return (
        <div>
            <div>
                <h3><b>USER CREATION MENU:</b></h3>
                <div>
                    <label>Name:</label>
                    <input onInput={inputName} type={'text'}/>
                </div>
                <div>
                    <label>Username:</label>
                    <input onInput={inputUsername} type={'text'}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input onInput={inputEmail} type={'text'}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input onInput={inputPhone} type={'text'}/>
                </div>
                <div>
                    <label>Website:</label>
                    <input onInput={inputWebsite} type={'text'}/>
                </div>
                <div>
                    <button onClick={() => createUser('create', newUser)}>Create</button>
                    <button onClick={createUser}>Cancel</button>
                </div>
            </div>
        </div>
    )
}