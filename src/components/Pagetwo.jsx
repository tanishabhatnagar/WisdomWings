//500/month
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

const Pagetwo = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSolveProblem = async () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('locale', 'en');
    formData.append('image', image);

    try {
      const response = await axios.post('https://photomath1.p.rapidapi.com/maths/solve-problem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-RapidAPI-Key': 'd987f684d0msh492258907adba27p116dcejsn08cbef4cefc1',
          'X-RapidAPI-Host': 'photomath1.p.rapidapi.com',
        },
      });

      
      const simplifiedResult = response.data.result.groups[0].entries[0].preview.content.solution.value;
      setResult(simplifiedResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="text-gray-600 body-font h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white ">Math Problem Solver</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Solve Math Problems Effortlessly with our Image-Based Math Problem Solver</p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">Upload Image</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="w-full bg-gray-100 bg-opacity-50 rounded border dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg" onClick={handleSolveProblem}>
            Solve Problem
          </button>
        </div>
      </div>

      {result !== null && (
  <div className="container mx-auto p-4 mt-4 text-center">
    <h2 className="text-xl font-semibold mb-2">Result : {result}</h2>
    
  </div>
)}
    </section>
  );
};

export default Pagetwo;
