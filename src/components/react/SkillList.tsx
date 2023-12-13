import { motion } from "framer-motion";

type Props = {
  skills: Array<string>;
};

const item = {
  hidden: { opacity: 0, translateY: 20 },
  show: {
    opacity: 1,
    translateY: 0,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const SkillList = ({ skills }: Props) => {
  return (
    <motion.ul variants={container} className="list-none">
      {skills.map((skill, i) => (
        <motion.li key={i} variants={item}>
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
};
