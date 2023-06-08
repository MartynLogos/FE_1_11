import React, { useState } from "react";
import { IUser } from "../../interfaces/users.dao";
import './userForm.scss'

interface IProps {
    updateUsersList: (user: IUser) => void;
    closeModalWindow: () => void;
}

const UsersListItem = (props: IProps) => {
    const { updateUsersList, closeModalWindow } = props;

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const handleFirstName = (event: React.FormEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value);
    }

    const handleLastName = (event: React.FormEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value);
    }

    const createUser = (event: React.SyntheticEvent) => {
        event.preventDefault();
        updateUsersList({
            id: '',
            firstName: firstName,
            lastName: lastName,
            age: 30
        });
        closeModalWindow();
    }

    return (
        <form action="" className="user-form">
            <div className="user-form__header">
                <h1>Create New User</h1>
                <span onClick={closeModalWindow}>X</span>
            </div>
            <div className="user-form__content">
                <input type="text" placeholder="First Name" onChange={handleFirstName} />
                <input type="text" placeholder="Last Name" onChange={handleLastName} />
            </div>
            <div className="user-form__footer">
                <button onClick={createUser}>Create</button>
                <button onClick={closeModalWindow}>Cancel</button>
            </div>
        </form>
    );
}

export default UsersListItem;
