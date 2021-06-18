import axios from 'axios';
import React from 'react'

function DeleteRequest() {

    function deleteData() {
        axios.delete("https://reqres.in/api/users/2")
        .then((response) => console.log(response))
    }

    return (
        <div className="deleteData">
            <button onClick={deleteData}>DELETE</button>
        </div>
    )
}

export default DeleteRequest;
