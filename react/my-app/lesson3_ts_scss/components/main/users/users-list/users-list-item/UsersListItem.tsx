interface IProps {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

const UsersListItem = (props: IProps) => {
    const { firstName, lastName, age, email } = props;

    return (
        <li>
            {firstName + ' ' + lastName}
            (<span>{ age }</span>)
            (<span>{ email ? email : 'No E-Mail' }</span>)
        </li>
    );
}

export default UsersListItem;
