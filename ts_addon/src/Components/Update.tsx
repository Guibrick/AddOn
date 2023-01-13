import React from 'react';
import IUpdate from '../Components/IUpdate';

const UserNameChange = ({ userData: { name }, onUpdate }: IUpdate) => {
    return (
        <div>
            <h1>Update name:</h1>
            <input type="text" value={name} onChange={onUpdate}/>
        </div>
    )
}

export default UserNameChange;