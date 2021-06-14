import React from "react";

function AbortControllerDemo() {
  const controller = new AbortController();
  const signal = controller.signal;
  console.log(signal);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(new Error(error)));
  };

  const delayFetchData = () => {
    setTimeout(fetchData, 3000);
  };

  const abortOperation = () => {
    controller.abort();
    console.log("Aborted...");
    console.log(signal);
  };

  return (
    <div>
      <button onClick={delayFetchData}>Fetch</button>
      <button onClick={abortOperation}>Abort</button>
    </div>
  );
}

export default AbortControllerDemo;
