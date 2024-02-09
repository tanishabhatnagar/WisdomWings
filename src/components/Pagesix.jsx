//30 per month
import React, { useState } from 'react';
import axios from 'axios';

const Pagesix = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState(null);

  const translateText = async () => {
    const apiParams = {
      toLang: targetLanguage,
      text: textToTranslate,
      fromLang: sourceLanguage
    };

    const apiOptions = {
      method: 'GET',
      url: 'https://translate-all-languages.p.rapidapi.com/translate',
      params: apiParams,
      headers: {
        'X-RapidAPI-Key': 'd987f684d0msh492258907adba27p116dcejsn08cbef4cefc1',
        'X-RapidAPI-Host': 'translate-all-languages.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(apiOptions);
      console.log('Translation Response:', response.data);

      if (response.data && response.data.translatedText) {
        setTranslatedText(response.data.translatedText);
        setError(null);
      } else {
        setError('Error translating text. Please try again.');
      }
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText(''); // Clear translated text on error
      setError(`Error translating text. Please try again. ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-20 h-screen  dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Text Translator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Source Language</label>
        <input
          type="text"
          className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:border-gray-600"
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Target Language</label>
        <input
          type="text"
          className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:border-gray-600"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Text to Translate</label>
        <textarea
          className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:border-gray-600"
          rows="4"
          value={textToTranslate}
          onChange={(e) => setTextToTranslate(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={translateText}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700"
      >
        Translate
      </button>
      {error && (
        <div className="mt-4">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      {translatedText && (
        <div className="mt-4">
          <p className="font-medium text-gray-700">Translated Text:</p>
          <p className="mt-2">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Pagesix;
