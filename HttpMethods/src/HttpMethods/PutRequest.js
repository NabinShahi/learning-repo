import axios from 'axios';
import React from 'react';

function PutRequest() {

    const putData = () => {
        axios.put("https://reqres.in/api/users/2", {
            name: "Elon Musk",
            job: "Frontend Developer"
        })
        .then((response) => console.log(response));
    }

    return (
        <div className="putRequest">
            <button onClick={putData}>PUT</button>
        </div>
    );
}

export default PutRequest;
