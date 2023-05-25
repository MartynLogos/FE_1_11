import { useState } from "react";
import UsersList from "./users-list/UsersList";
import UsersForm from "./users-form/UsersForm";

const Users = () => {
    const [users, setUsers] = useState([{ firstName: 'Ivan', lastName: 'Ivaniv' }]);

    const updateUsersList = (newUser) => {
        setUsers([...users, newUser]);
    }

    return (
        <div className="users">
            <UsersList users={users} />
            <UsersForm updateUsersList={updateUsersList} />
        </div>
    );
}

export default Users;
