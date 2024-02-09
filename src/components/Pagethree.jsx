//100/month
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagethree = () => {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const [query, setQuery] = useState('');

  // ...

const updateChat = async () => {
  if (query.trim()) {
    addChat('user', query);
    setBotTyping(true);

    try {
      const options = {
        method: 'POST',
        url: 'https://chatgpt4-ai-chatbot.p.rapidapi.com/ask',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'd987f684d0msh492258907adba27p116dcejsn08cbef4cefc1',
          'X-RapidAPI-Host': 'chatgpt4-ai-chatbot.p.rapidapi.com',
        },
        data: {
          query: query,
        },
      };

      const response = await axios.request(options);

      // Log the entire response to inspect its structure
      console.log('Full API Response:', response);

      // Check if the necessary properties exist
      if (response.data && response.data.response) {
        // Log the relevant part of the response
        console.log('Bot Answer:', response.data.response);

        // Update state immediately with the bot's response
        addChat('bot', response.data.response);
      } else {
        console.error('API Error: Invalid response structure');
      }
    } catch (error) {
      console.error('API Error:', error);
    }

    setBotTyping(false);
    setQuery('');
  }
};

// ...


  const addChat = (role, text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role,
        text,
      },
    ]);
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    const messagesContainer = document.getElementById('messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col h-screen relative">
      <div className="flex-1 flex flex-col justify-between bg-white dark:bg-gray-900">
        <div
          id="messages"
          className="flex-1 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {messages.map((message, key) => (
            <div key={key} className={`flex items-end ${message.role === 'bot' ? 'justify-end' : ''}`}>
              <div
                className={`flex flex-col space-y-2 text-md leading-tight max-w-lg mx-2 ${
                  message.role === 'bot' ? 'order-2 items-start' : 'order-1 items-end'
                }`}
              >
                <div>
                  <span
                    className={`px-4 py-3 rounded-xl inline-block ${
                      message.role === 'bot'
                        ? 'rounded-bl-none bg-gray-100 text-gray-600'
                        : 'rounded-br-none bg-blue-500 text-white'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              </div>
              <img
                src={
                  message.role === 'bot'
                    ? 'https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png'
                    : 'https://i.pravatar.cc/100?img=7'
                }
                alt=""
                className="w-6 h-6 rounded-full"
              />
            </div>
          ))}
          {botTyping && (
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
                <div>
                  <img
                    src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif"
                    alt="..."
                    className="w-16 ml-6"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 px-4 py-4">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Say something..."
              autoComplete="off"
              autoFocus={true}
              onKeyDown={(e) => e.key === 'Enter' && updateChat()}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-md w-full focus:outline-none focus:placeholder-gray-400 dark:placeholder-gray-100 text-gray-600 placeholder-gray-600 pl-5 pr-16 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 border-2 border-gray-200 focus:border-blue-500 rounded-full py-2"
            />
            <div className="absolute right-2 items-center inset-y-0">
              <button
                type="button"
                onClick={updateChat}
                className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-200 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
              >
                <i className="mdi mdi-arrow-right text-xl leading-none"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagethree;
