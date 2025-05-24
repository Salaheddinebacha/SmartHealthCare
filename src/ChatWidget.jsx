import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="chat-button" onClick={toggleChat}>
        💬
      </div>

      {open && (
        <div className="chat-container">
          <iframe
            src="http://localhost:3000" // 🔁 your chatbot's local dev server
            title="MedChatbot"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
