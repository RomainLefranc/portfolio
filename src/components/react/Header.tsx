import Pill from "./Pill";
import { motion } from "framer-motion";
type Props = {};

const variants = {
  hidden: { opacity: 0, translateY: 20 },
  show: {
    opacity: 1,
    translateY: 0,
  },
};

const pillsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Header = ({}: Props) => {
  return (
    <header className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:p-10 lg:gap-16 xl:grid-cols-[6fr_4fr]">
      <div className="text-center lg:text-start text-xl lg:text-3xl flex flex-col gap-4">
        <motion.div
          className="flex flex-col gap-4"
          variants={headerVariants}
          whileInView="show"
          initial="hidden"
        >
          <motion.h1
            variants={variants}
            className="max-w-[39ch] mx-auto lg:mx-0 text-5xl lg:text-7xl text-[--gray-0)]"
          >
            Salut,
            <br />
            moi c'est
            <br />
            Romain Lefranc
          </motion.h1>
          <motion.p
            variants={variants}
            className="max-w-[39ch] mx-auto lg:mx-0"
          >
            Je suis un développeur FullStack basé actuellement sur l'île de la
            Réunion, Océan Indien
          </motion.p>
          <motion.div
            className="hidden md:flex md:gap-2 flex-wrap"
            variants={pillsContainer}
          >
            <Pill
              href="mailto:lefranc46@gmail.com"
              text="Lefranc46@gmail.com"
              icon="paper-plane-tilt"
            ></Pill>
            <Pill
              href="https://github.com/RomainLefranc"
              text="GitHub"
              icon="github-logo"
            ></Pill>
            <Pill
              href="https://www.linkedin.com/in/romainlefranc"
              text="Linkedin"
              icon="linkedin-logo"
            ></Pill>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        variants={variants}
        initial="hidden"
        whileInView="show"
        className="w-[70%] h-auto flex-shrink-0 lg:w-full"
        alt="Romain photo"
        width="500"
        height="500"
        src="/portfolio/assets/portrait.webp"
      />
    </header>
  );
};
