import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form"
import ShowDetails from "./ShowDetails"

function FormApp() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // const data = response.data.slice(0, 10);
      // console.log(data);
      // const something = JSON.stringify(data);
      // console.log(something); 
      // const p = JSON.parse(something);
      // console.log(p);
      // setDetail(data);
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      {detail.map((x) => (
        <ShowDetails key={x.id} detail={x} />
      ))}
      <Form />
    </div>
  );
}

export default FormApp;
