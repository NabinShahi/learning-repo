import React from "react";

function ShowDetails({ detail }) {
  return (
    <div className="showDetail">
      <h1>{detail.id}</h1>
      <h3 style={{ color: "#888888" }}>{detail.title}</h3>
      <p>{detail.body}</p>
    </div>
  );
}

export default ShowDetails;
