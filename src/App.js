import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://0.0.0.0:1337";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {
      query: {
        user_id: "caio",
      },
    });

    socket.on("hello", (data) => {
      setResponse(data);
    });
  }, []);

  return <div className="App">aqui foi{response}</div>;
}

export default App;
