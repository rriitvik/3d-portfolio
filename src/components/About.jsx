import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'

import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText} >
        Introduction
      </p>
      <h2 className={styles.sectionHeadText} >
        Overview.
      </h2>
    </motion.div>
    <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] line-spacing-3">
      I am a front-end developer with knowledge in HTML, CSS(Tailwind), JavaScript, and expertise in frameworks like React and libraries like MaterialUI, ThreeJs, and FramerMotion for creating 3D graphics. Apart from this I am also familiar with basics of Version Control System (Git & GitHub), PackageManager and deployment tools.
    </motion.div>

    </>
  )
}

export default SectionWrapper(About, "about")