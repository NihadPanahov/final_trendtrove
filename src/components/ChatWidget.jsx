import React, { useState } from 'react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="bg-gray-600 p-4 rounded-2xl">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Canlı Sohbet</h2>
      </div>
      <div className="mb-4">
        {/* */}
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <div>
        {/* */}
        <input
          type="text"
          className="border border-gray-400 rounded p-2 w-full"
          placeholder="Mesajınızı buraya yazın..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 mt-2"
          onClick={handleSendMessage}
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
