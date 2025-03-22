import React, { useState } from 'react';
import { FaTrash, FaBars, FaTimes } from 'react-icons/fa';

// Replace with your actual logo URL if available

const ChatSidebar = ({ chats, selectChat, deleteConversation, startNewConversation, selectedChatIndex }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 bg-[#B22222] text-white rounded hover:bg-[#A52A2A] fixed top-4 right-4 z-50"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`chat-sidebar w-2/3 sm:w-full h-full border-r p-4 fixed md:relative bg-[#800020] md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Esprit Assist</h2>
        </div>
        <ul>
          {chats.length === 0 ? (
            <li className="text-gray-300">No conversations yet</li>
          ) : (
            chats.map((chat, index) => (
              <li
                key={index}
                onClick={() => selectChat(index)}
                className={`cursor-pointer mb-2 p-2 hover:bg-[#75001A] flex justify-between items-center ${selectedChatIndex === index ? 'bg-[#75001A]' : ''}`}
              >
                <div className="flex-1 text-white">
                  Conversation {index + 1}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Are you sure you want to delete this conversation?')) {
                      deleteConversation(index);
                    }
                  }}
                  className="ml-2 p-1 text-white rounded hover:text-red-300"
                >
                  <FaTrash />
                </button>
              </li>
            ))
          )}
        </ul>
        <button
          onClick={startNewConversation}
          className="mt-4 p-2 bg-[#B22222] text-white rounded hover:bg-[#A52A2A] w-full"
        >
          New Chat
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
