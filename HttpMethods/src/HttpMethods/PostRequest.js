import axios from "axios";
import React from "react";

function PostRequest() {
  const postUser = async () => {

    const response = await axios.post("https://reqres.in/api/register", {
      email: "nabin.shahi4312@gmail.com",
      password: "nabinshahi",
    });

    console.log(response);
  };

  const sendData = () => {
    
    // axios.post("https://reqres.in/api/register").then((response) => console.log(response));

    axios({
      method: "post",
      url: "/user/12345",
      data: {
        email: "Fred",
        password: "Flintstone",
      },
    }).then((response) => console.log(response));
  };

  return (
    <div className="postRequest">
      <button onClick={postUser}>POST1</button>
      <button onClick={sendData}>POST2</button>
    </div>
  );
}

export default PostRequest;
