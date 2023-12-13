import { motion } from "framer-motion";
import type { iconPaths } from "../IconPaths";
import { Icon } from "./Icon";
import "./Pill.css";
type Props = {
  text: string;
  icon: keyof typeof iconPaths;
  href: string;
};

const item = {
  hidden: { opacity: 0, translateY: 20 },
  show: {
    opacity: 1,
    translateY: 0,
  },
};

export default function Pill({ text, icon, href }: Props) {
  return (
    <motion.a href={href} className="pill" variants={item}>
      <Icon icon={icon} size="1.33em" /> {text}
    </motion.a>
  );
}
