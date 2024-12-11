import React from "react";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div id="chatbot-container">
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/dc9285a0-3f9a-462f-beb7-e959906f27a9"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
