import React, { useState } from 'react';
import axios from 'axios';

const Pagefive = () => {
  const [urlInput, setUrlInput] = useState('');
  const [minLength, setMinLength] = useState(100);
  const [maxLength, setMaxLength] = useState(300);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    try {
      const response = await axios.post('https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/', {
        url: urlInput,
        min_length: minLength,
        max_length: maxLength,
        is_detailed: false
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'd987f684d0msh492258907adba27p116dcejsn08cbef4cefc1',
          'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
        }
      });

      setSummary(response.data.summary);
      setError('');
    } catch (error) {
      console.error('Error making summarization request:', error);

      if (error.response) {
        // The request was made and the server responded with a non-2xx status
        setError(`Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server.');
      } else {
        // Something went wrong in making the request
        setError('An error occurred while processing the request.');
      }

      setSummary('');
    }
  };

  return (
    <div className="container mx-auto py-8 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center"> Summarizer</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400">URL</label>
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Enter URL..."
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800  dark:border-gray-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400">Min Length</label>
        <input
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:bg-gray-800  dark:border-gray-600 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400 ">Max Length</label>
        <input
          type="number"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800  dark:border-gray-600"
        />
      </div>

      <button
        onClick={handleSummarize}
        className="mt-4 bg-black hover:bg-gray-600 content-center text-white  font-bold py-2 px-4 rounded "
      >
        Summarize URL
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {summary && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Pagefive;
