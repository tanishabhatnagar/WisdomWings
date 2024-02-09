import React from "react";

const ServicesData = [
  {
    id: 1,
    img: 'image/com.gif',
    name: "Dictionary",
    description:
      "is a reference book containing word definitions,serves as a valuable tool for language comprehension, aiding users in using words in various contexts."
  },
  {
    id: 2,
    img: 'image/math.gif',
    name: "MathSolver",
    description:
      "Sharpen your skills with interactive quizzes that reinforce learning. Test your knowledge and track your progress as you go through different educational modules.",
  },
  {
    id: 3,
    img: 'image/pic1.gif',
    name:"ChatBot",
    description:
      "Monitor your learning journey with our progress tracking feature. See your achievements, set goals, and track your educational milestones over time.",
  },
  {
    id: 4,
    img:'image/zoom.gif',
    name: "Courses",
    description:
      "Learning meets fun! Engage in interactive educational games that combine entertainment with valuable lessons, making the learning process enjoyable.",
  },
  {
    id: 5,
    img: 'image/sum.gif',
    name: "summarizer",
    description:
      "Facilitate communication between parents and teachers. Receive updates on your child's progress and engage in a collaborative approach to their education.",
  },
  {
    id: 6,
    img:'image/globe.gif',
    name: "Language Support",
    description:
      "Our platform offers multilingual support, ensuring that children from diverse linguistic backgrounds can learn in their preferred language",
  },
];

const Services = () => {
  
    const handleButtonClick = (id) => {
      // Define a function to handle button click and navigate based on id
      switch (id) {
        case 1:
          window.location.href = "/FreeSources"; // Navigate to /page1 for id 1
          break;
        
          case 2:
          window.location.href = "/page2"; // Navigate to /page2 for id 2
          break;
          case 3:
          window.location.href = "/page3"; // Navigate to /page2 for id 2
          break;
          case 4:
          window.location.href = "/page4"; // Navigate to /page2 for id 2
          break;
          case 5:
          window.location.href = "/page5"; // Navigate to /page2 for id 2
          break;
          case 6:
          window.location.href = "/page6"; // Navigate to /page2 for id 2
          break;
       
        default:
          // Navigate to a default page or handle other cases
          break;
      }
    };
  return (
    <>
      <span id="services"></span>
      <div className="py-10 relative">
      
        <div className="container mx-auto relative ">
          <div className=" mb-auto text-center max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold text-black dark:text-white">Services</h1>
            <p className="text-xs text-black dark:text-gray-400">
            Unlock a world of knowledge with our comprehensive educational services designed to empower learners of all ages. Here's a glimpse of what we offer:


            </p>
          </div>
          <div className=" mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <button
              key={service.id}
              data-aos="zoom-in"
              data-aos-duration="300"
              className="rounded-2xl mb-5 bg-white dark:bg-gray-700 group-hover:scale-200 relative shadow-xl duration-high group max-w-[300px] transition-shadow hover:shadow-2xl dark:hover:shadow-2xl"
              onClick={() => handleButtonClick(service.id)}
            >
              <div className="h-[100px] w-[100px] flex items-center justify-center overflow-hidden mx-auto">
                <img
                  src={service.img}
                  alt=""
                  className="max-h-full max-w-full transform group-hover:scale-105  duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full">
                  {/* Add StarRatings or any other components if needed */}
                </div>
                <h1 className="text-xl font-bold mb-10">{service.name}</h1>
                <p className="text-gray-500 duration-high text-sm">
                  {service.description}
                </p>
              </div>
            </button>
            
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
