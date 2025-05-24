import React, { useState } from 'react';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Chat icon button */}
      <div
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer z-50 hover:bg-blue-700 transition duration-200"
      >
        💬
      </div>

      {/* Chat container */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[370px] h-[500px] bg-white border rounded-2xl shadow-2xl z-50 overflow-hidden">
          <iframe
            src="http://localhost:3000" // Change if needed
            title="MedChatbot"
            className="w-full h-full border-none"
          />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
