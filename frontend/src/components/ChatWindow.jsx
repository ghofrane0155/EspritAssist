import React, { useState, useRef, useEffect } from 'react';

const ChatWindow = ({ chat = [], onSendMessage, conversationId }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  // When a fallback (or any bot) button is clicked, send both display text and payload
  const handleButtonClick = (btn) => {
    onSendMessage(btn.title, btn.payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!conversationId) {
      console.error("Conversation ID is missing!");
      return;
    }
    if (message.trim()) {
      // For typed messages, display text and payload are identical.
      onSendMessage(message, message);
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
    <div className="chat-window flex flex-col flex-1 p-4 bg-gray-100 text-gray-900">
      <div className="messages flex-grow mb-4 overflow-y-auto bg-white p-4 rounded shadow">
        {chat.length === 0 ? (
          <div className="text-center text-gray-500 font-bold">
            What can I help with?
          </div>
        ) : (
          chat.map((msg, index) => (
            <div key={index} className="message-pair mb-4">
              {/* User Message */}
              {msg.user && (
                <div className="py-2 flex justify-end">
                  <div className="user-message bg-gray-300 text-gray-900 p-4 rounded-full inline-block max-w-full">
                    <strong className="text-gray-700">User:</strong> {msg.user}
                  </div>
                </div>
              )}
              {/* Bot Message */}
              {msg.bot && (
                <div className="py-2">
                  <div className="bot-message text-left">
                    <strong className="text-gray-700">Bot:</strong> {msg.bot}
                  </div>
                  {msg.buttons && msg.buttons.length > 0 && (
                    <div className="mt-2">
                      {msg.buttons.map((btn, i) => (
                        <button
                          key={i}
                          onClick={() => handleButtonClick(btn)}
                          className="mr-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
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
          className="border border-gray-400 p-2 flex-grow bg-white text-gray-900 rounded-l focus:outline-none"
        />
        <button type="submit" className="bg-[#B22222] hover:bg-[#A52A2A] text-white p-2 ml-2 rounded-r">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
