import React, { useState, useRef, useEffect } from 'react';

const ChatWindow = ({ chat = [], onSendMessage, conversationId }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  // When user clicks a button from the fallback or any bot message
  const handleButtonClick = (payload) => {
    // Send the button payload as a new user message
    onSendMessage(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!conversationId) {
      console.error("Conversation ID is missing!");
      return;
    }
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, message]);

  return (
    <div className="chat-window flex flex-col flex-1 p-4">
      <div className="messages flex-grow mb-4 overflow-y-auto">
        {chat.length === 0 ? (
          <div className="text-center text-gray-200 font-bold">
            What can I help with?
          </div>
        ) : (
          chat.map((msg, index) => (
            <div key={index} className="message-pair mb-4">
              {/* User Message */}
              {msg.user && (
                <div className="py-2 flex justify-end">
                  <div className="user-message bg-[#3C3D37] p-4 rounded-full inline-block max-w-full">
                    <strong className="text-purple-300">User:</strong> {msg.user}
                  </div>
                </div>
              )}
              {/* Bot Message */}
              {msg.bot && (
                <div className="py-2">
                  <div className="bot-message text-left">
                    <strong className="text-purple-300">Bot:</strong> {msg.bot}
                  </div>
                  {/* Render buttons if they exist */}
                  {msg.buttons && msg.buttons.length > 0 && (
                    <div className="mt-2">
                      {msg.buttons.map((btn, i) => (
                        <button
                          key={i}
                          onClick={() => handleButtonClick(btn.payload)}
                          className="mr-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                        >
                          {btn.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="border p-2 flex-grow text-gray-800"
        />
        <button type="submit" className="bg-[#ECDFCC] text-gray-800 p-2 ml-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
