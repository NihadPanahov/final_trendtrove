import React, { useState, useEffect } from 'react';
import { setItem, getItem } from './helpers/storage';

import { useTranslation } from 'react-i18next';


const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const storedMessages = getItem('chatMessages');
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    setItem('chatMessages', messages);
  }, [messages]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      const sender = newMessage === newMessage.toLowerCase() ? 'user2' : 'user1';
      setMessages([...messages, { text: newMessage, sender }]);
      setNewMessage('');
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setItem('chatMessages', []);
  };

  const [t, i18n] = useTranslation("global");


  return (
    <div className="bg-gray-600 shadow-md rounded-lg p-4 max-w-md mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-white">{t("liveechat")}</h2>
        <p className="text-white">{t("onlinec")}</p>
      </div>
      <div className="flex flex-col space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start ${
              message.sender === 'user1' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="rounded-full bg-gray-500 h-8 w-8"></div>
            <div className={`ml-2 ${message.sender === 'user1' ? 'order-1' : 'order-2'}`}>
              <p
                className={`text-sm p-2 rounded-lg ${
                  message.sender === 'user1' ? 'bg-blue-600 text-white ml-0' : 'bg-green-600 text-white mr-0'
                }`}
              >
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          placeholder={t("typeyourmessage")}
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white rounded-lg px-4 py-2">
          {t("send")}
        </button>
        <button type="button" className="mt-2 bg-red-500 text-white rounded-lg px-4 py-2 ml-2" onClick={handleClearChat}>
          {t("clearchat")}
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
