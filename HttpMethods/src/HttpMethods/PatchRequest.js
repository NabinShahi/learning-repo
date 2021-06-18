import axios from "axios";
import React from "react";

function PatchRequest() {

    
  const patchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "foo",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  };

//   const patchData = () => {
//     axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
//       title: "Elon Musk",
//       body: "Frontend Developer",
//     });
//   };

  return (
    <div className="patchRequest">
      <button onClick={patchData}>PATCH</button>
    </div>
  );
}

export default PatchRequest;
