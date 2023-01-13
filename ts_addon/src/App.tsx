import React, { useState, useEffect } from 'react';
import './App.css';
import IUserInfo from './Components/IUserInfo';
import UserNameChange from './Components/Update';

function App() {
    const [userData, setUserData] = useState<IUserInfo>({
        name: '',
        locationName: '',
        locationNumber: 0,
        age: 0,
    });

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://randomuser.me/api/");
            const userResults = await response.json();

            const numberOne = userResults.results[0];

            setUserData(prev => {
                return {
                    ...prev,
                    name: numberOne.name.first,
                    locationName: numberOne.location.street.name,
                    locationNumber: numberOne.location.street.number,
                    age: numberOne.dob.age,
                }
            })
        }
        getData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const value = e.currentTarget.value

        setUserData({ ...userData, name: value })
    }

    return (
        <>
            <div>
                <div>Name: {userData.name}</div>
                <div>Location: {userData.locationName} {userData.locationNumber}</div>
                <div>Age: {userData.age}</div>
            </div>
            <UserNameChange userData={userData} onUpdate={handleChange} />
        </>
    );
}

export default App;