import React from 'react';
import IUserInfo from '../Components/IUserInfo';

interface IUpdate {
    userData: IUserInfo,
    onUpdate(e: React.ChangeEvent<HTMLInputElement>): void
}

export default IUpdate;