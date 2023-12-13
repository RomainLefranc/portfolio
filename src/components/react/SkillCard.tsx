import { motion } from "framer-motion";
import { SkillIcon } from "./SkillIcon";
import { iconPaths } from "../IconPaths";
import { SkillList } from "./SkillList";
import { SkillTitle } from "./SkillTitle";

type Props = {
  delay: number;
  title: string;
  skills: Array<string>;
  icon: keyof typeof iconPaths;
};

export const SkillCard = ({ delay, title, skills, icon }: Props) => {
  const cardVariants = {
    hidden: { opacity: 0, translateY: 20 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: delay * 0.075,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      className="border flex flex-col border-[#e3e6ee] rounded-xl p-6 bg-[hsla( 0, 0%, 100%, 0.4)] shadow-sm gap-2 lg:gap-4 w-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
    >
      <SkillIcon
        icon={icon}
        color="var(--accent-regular)"
        size="2.5rem"
        gradient
      />
      <SkillTitle title={title} />
      <SkillList skills={skills} />
    </motion.div>
  );
};
