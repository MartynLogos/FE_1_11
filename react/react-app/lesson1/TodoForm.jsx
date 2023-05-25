import { useState } from "react";


const TodoForm = () => {
    // ctrl + space
    const [title, setTitle] = useState('Title');
    // const [isModalOpen, setModalOpen]

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div>
            <h1>{title}</h1>
            <input type="text" onChange={handleTitleChange} />
            {/* <input type="text" onChange={(event) => setTitle(event.target.value)} /> */}
        </div>
    )
}

export default TodoForm;
