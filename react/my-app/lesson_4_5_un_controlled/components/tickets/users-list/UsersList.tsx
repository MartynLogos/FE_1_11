import { IUser } from "../../interfaces/users.dao";
import UsersListItem from "./users-list-item/UsersListItem";

interface IProps {
    users: IUser[];
}

const UsersList = (props: IProps) => {
    const users = props.users;

    return (
        <ul>
            {users.map(user => {
                return <UsersListItem
                    firstName={user.firstName}
                    lastName={user.lastName}
                    age={user.age}
                    email={user.email}
                />
            })}
        </ul>
    );
}

export default UsersList;
