import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a UI/UX Designer who graduated from Aditya University in 2026. I am a multilingual 
        speaker with a strong passion for ethical design, artificial intelligence, and human-computer 
        interaction. My education has equipped me with a solid foundation in the principles of design
         and user experience, and I'm eager to apply my skills to create intuitive, user-friendly digital products. 
         I'm looking to join a company that values innovation, collaboration, and continuous learning, and
          I am confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology and design
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
