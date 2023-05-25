
const UsersListItem = props => {
    const { firstName, lastName } = props;

    return (
        <li>
            {firstName + ' ' + lastName}
        </li>
    );
}

export default UsersListItem;
