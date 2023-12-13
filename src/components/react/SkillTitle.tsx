import { motion } from "framer-motion";

type Props = {
  title: string;
};

const titleVariants = {
  hidden: { opacity: 0, translateY: 20 },
  show: {
    opacity: 1,
    translateY: 0,
  },
};

export const SkillTitle = ({ title }: Props) => {
  return (
    <motion.h2 className="text-4xl" variants={titleVariants}>
      {title}
    </motion.h2>
  );
};
