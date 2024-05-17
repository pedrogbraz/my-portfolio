{/* Framer Motion */}
import { motion } from "framer-motion"

{
  /* Props Info */
}
type CategorysProps = {
  name: string;
  title: string;
  span?: string;
};

const Categorys = ({ name, title, span }: CategorysProps) => {
  return (
    <motion.div
      className="text-4xl space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <span className="flex gap-1 items-center text-sm text-[--color-theme]">
        . . /{name}
      </span>
      <h1 className="text-[--color-white] font-light">
        {title}{" "}
        <span className="text-[--color-theme] font-semibold">{span}</span>
      </h1>
    </motion.div>
  );
};

export default Categorys;
