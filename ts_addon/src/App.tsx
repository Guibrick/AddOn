import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface Iname {
    first: string
}

interface IAddress {
    number: number
    name: string
}

interface IStreet {
    street: IAddress
}

interface Iage {
    age: number
}

interface Iresults {
    name: Iname
    location: IStreet
    registered: Iage
} 

interface Ialso {
    results: Iresults[]
}

function App() { 
    const [userData, setUserData] = useState<Ialso>();

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://randomuser.me/api/");
            const userResults = await response.json();
            setUserData(userResults);
        }
        getData();
    }, []);

    return (
            <>
            <div>{userData?.results[0].name.first}</div>
            <div>{userData?.results[0].location.street.name}</div>
            <div>{userData?.results[0].location.street.number}</div>
            <div>{userData?.results[0].registered.age}</div>
            </>
     )
}

export default App;
