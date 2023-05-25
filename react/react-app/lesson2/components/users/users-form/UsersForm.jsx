import { useState } from "react";

const UsersListItem = props => {
    const { updateUsersList } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const createUser = event => {
        event.preventDefault();
        updateUsersList({
            firstName: firstName,
            lastName: lastName
        })
    }

    return (
        <form action="">
            <input type="text" placeholder="First Name" onChange={handleFirstName} />
            <input type="text" placeholder="Last Name" onChange={handleLastName} />
            <button onClick={createUser}>Create</button>
        </form>
    );
}

export default UsersListItem;
