import { useState } from "react";
import UsersList from "./users-list/UsersList";
import UsersForm from "./users-form/UsersForm";
import { IUser } from "../../interfaces/users.dao";
import './users.scss'

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([{ firstName: 'Ivan', lastName: 'Ivaniv', age: 23, email: 'Ivan@mail.com' }]);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const updateUsersList = (newUser: IUser) => {
        setUsers([...users, newUser]);
    }

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
