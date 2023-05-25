import UsersListItem from "./users-list-item/UsersListItem";

const UsersList = (props) => {
    const users = props.users;

    return (
        <ul>
            {users.map(user => {
                return <UsersListItem firstName={user.firstName} lastName={user.lastName} />
            })}
        </ul>
    );
}

export default UsersList;
