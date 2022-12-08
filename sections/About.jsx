'use client'
import { TypingText } from '../components'

import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div
      className="
    gradient-02 z-0"
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Pell </span>
        lectus ue, ricies vel tortor eg, fringilla ornare metus. Fusce ntum
        felis nec orci auctor, id fermen ligula feug. Nam vel finibus augue.
        <span className="font-extrabold text-white">Quis </span>
        ac fauc qua, vel acc eni Null sce lacus vel lorem fet, quis cursus
        <span className="font-extrabold text-white"> eros </span>
        aliqu. Ut in pet ante. que semper dap felis mattis accums. Nam trtor
        lectus, finibus et ligula et, tincnt
        <span className="font-extrabold text-white"> vestibulum </span>
        neque. Fe sit amt na ac quam veis varius Nullam.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
)

export default About
