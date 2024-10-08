import { VerticalTimeline ,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { useState } from "react"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
  const ExperienceCard = ({ experience }) => {
    const [hoveredExp, setHoveredExp] = useState(null);
  
    const handleMouseOver = (exp) => {
      setHoveredExp(exp.company_name);
    };
  
    const handleMouseOut = () => {
      setHoveredExp(null);
    };
  
    return (
      <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.company_name}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[90%] h-[90%] object-fit rounded-full hover:cursor-pointer"
              onDoubleClick={() => window.open(experience.link)}
              onMouseOver={() => handleMouseOver(experience)}
              onMouseOut={handleMouseOut}
            />
            {hoveredExp === experience.company_name && (
              <div className="absolute flex top-10 left-0 bg-white p-2 shadow text-black-200 text-[10px] items-center justify-center">
                {experience.company_name}
              </div>
            )}
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
const Experience = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText} >
       Technologies for stong foundation
      </p>
      <h2 className={styles.sectionHeadText} >
        How I gained experience?
      </h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")