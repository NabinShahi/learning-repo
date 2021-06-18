import axios from 'axios';
import React from 'react';

function GetRequest() {

    const getUser = async () =>{
        const res = await axios.get("https://reqres.in/api/users?page=2", {
            params: {
                id: 10
            }
        });
        console.log(res);
    }

    // const promiseData = async () => {

    //     async function getUsers() {
    //         const users = await axios.get("https://reqres.in/api/users?page=2");
    //         console.log(users.data);
    //         return users;
    //     }

    //     async function getResources() {
    //         const resources = await axios.get("https://reqres.in/api/unknown");
    //         console.log(resources.data);
    //         return resources;
    //     }

    //     const res = await Promise.all([getUsers, getResources]);
    //     console.log(res);

    // }

    return (
        <div className="getRequest">
            <button onClick={getUser}>GET1</button>
            {/* <button onClick={promiseData}>GET2</button> */}
        </div>
    )
}

export default GetRequest;
