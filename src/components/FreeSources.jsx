import React, { useState } from 'react';
import axios from 'axios';

const FreeSources = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  // ...
  
  

  
  // ...
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
      params: { word: word },
      headers: {
        'X-RapidAPI-Key': 'd987f684d0msh492258907adba27p116dcejsn08cbef4cefc1',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
  
      // Check if 'definition' property exists in the response
      if (response.data.definition) {
        // Assuming the definition is needed
        const wordDefinition = response.data.definition;
        setDefinition({ word: word, definition: wordDefinition });
      } else {
        // Handle the case when no definition is available
        console.log('No definition found');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const handleButtonClick = async () => {
    await fetchData();
  };

  return (
    <section className="text-gray-600 body-font h-screen flex">
      <div className="lg:w-3/5 md:w-1/2" >
      
    <img src="image/lib.avif" alt="Library" className="w-full h-full object-cover" />
       

      </div>
      <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
  <h1 className="title-font font-sans font-medium text-3xl font-bold text-gray-900 mb-4 text-center">
    DICTIONARY
  </h1>
  <p className="leading-relaxed mt-4 text-center mb-4">
    User-friendly interface for discovering definitions, synonyms to enhance your understanding of words and expressions.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex flex-col  mt-10 md:mt-0 w-full ">
    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center dark:text-white">Search for a Word</h2>
    <div className="relative mb-4">
      <label htmlFor="dictionary-word" className="leading-7 text-sm text-gray-600 dark:text-gray-300">
        Dictionary Word
      </label>
      <input
        type="text"
        id="dictionary-word"
        name="dictionary-word"
        className="w-full bg-white dark:bg-gray-600 dark:border-gray-500 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
    <button
      className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mx-auto"
      onClick={handleButtonClick}
    >
      Search
    </button>
    {definition && (
      <div className="mt-3 text-center">
        <h3 className="text-gray-900 text-lg font-medium title-font mb-2">Definitions:</h3>
        <p>
          <span className="font-bold">Term:</span> {definition.word}
        </p>
        {definition.definition && (
          <p>
            <span className="font-bold">Definition:</span> {definition.definition.split('2')[0]}
          </p>
        )}
      </div>
    )}
  </div>
</div>

      </div>
    </section>
  );
};

export default FreeSources;