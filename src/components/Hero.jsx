import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import herobg from "../assets/herobg.png"; // Adjust path if needed

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1, // Adjust opacity as needed
        }}
      />

      {/* Text Section */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5 z-20`}
      >
        {/* Left Line */}
        <div className="flex flex-col justify-center items-center mt-5 sm:mt-0">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-[2px] sm:w-1 h-32 sm:h-80 violet-gradient" />
        </div>
        {/* Hero Text */}
        <div className="mt-4 sm:mt-0">
          <h1 className="text-white font-bold text-[32px] sm:text-[50px] md:text-[70px] leading-tight">
            Hi, I'm <span className="text-[#915EFF]">Syed Farooq</span>
          </h1>
          <p className="mt-2 text-white-100 text-[16px] sm:text-[20px]">
            I do{" "}
            <Typewriter
              options={{
                strings: [
                  "UX / UI Design",
                  "Web Development",
                  "Cyber Security",
                  "AWS Cloud",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>
         
      {/* 3D Canvas or Fallback Image */}
      <div className="w-full h-[250px] sm:h-[400px] md:h-screen relative z-10">
        <ComputersCanvas />
      </div> 
          
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[30px] h-[55px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;