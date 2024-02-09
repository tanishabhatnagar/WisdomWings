import React from "react";
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <section  href="/about"class="bg-gray-100 dark:bg-gray-800 h-screen">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">About Us</h2>
                <p class="mt-4 text-gray-600 text-lg dark:text-gray-300">Welcome to WisdomWings, a dedicated platform committed to empowering young minds with boundless educational resources. At WisdomWings, we believe that education is a fundamental right, and we are on a mission to provide free courses, innovative learning tools, and a supportive community for underprivileged children around the world.<br></br>

Our platform offers a diverse range of free courses spanning various subjects, ensuring that every child has access to quality education, irrespective of their socio-economic background. From comprehensive dictionaries to handy math solvers, WisdomWings is designed to be a one-stop solution for academic support.

</p>
               
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md"></img>
            </div>
        </div>
    </div>
</section>
    </>
  );
};

export default Banner;
