import { useEffect, useState } from "react";
import UsersList from "./users-list/UsersList";
import UsersForm from "./users-form/UsersForm";
import { IUser } from "../interfaces/users.dao";
import './users.scss'

const Users = () => {

    // const { state: users, setState: setUsers } = useStoredState('users');



    let response: IUser[] = [];
    const storage = localStorage.getItem('users');

    if(storage) {
        response = JSON.parse(storage);
    }

    const [users, setUsers] = useState<IUser[]>(response);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const updateUsersList = (newUser: IUser) => {
        setUsers([...users, newUser]);
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <div className="users">
            <UsersList users={users} />
            <button onClick={() => setModalOpen(true)}>Add New User</button>
            {isModalOpen &&
                <UsersForm
                    updateUsersList={updateUsersList}
                    closeModalWindow={() => setModalOpen(false)}
                />
            }
        </div>
    );
}

export default Users;
