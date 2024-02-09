import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pagefour = () => {
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(true);
  const topicToSearch = 'python'; // Replace with the topic you want to search

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://udemy-course-scrapper-api.p.rapidapi.com/course-names/course-instructor/course-url',
        headers: {
          'X-RapidAPI-Key': 'd987f684d0msh492258907adba27p116dcejsn08cbef4cefc1',
          'X-RapidAPI-Host': 'udemy-course-scrapper-api.p.rapidapi.com',
        },
        params: {
          topic: topicToSearch,
        },
      };

      try {
        const response = await axios.request(options);
        console.log('API Response:', response.data); // Log the API response

        // Display the raw response text on the screen
        setResponseText(JSON.stringify(response.data, null, 2));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topicToSearch]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Udemy Courses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre className="border p-4 bg-gray-100 overflow-auto max-w-full">
          <code>{responseText}</code>
        </pre>
      )}
    </div>
  );
};

export default Pagefour;
