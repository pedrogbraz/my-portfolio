import { motion } from "framer-motion";
import Image from "next/image";

type LanguagesProps = {
  src: string;
  alt: string;
  delay: number; // Adicionamos um delay como propriedade
};

const Languages = ({ src, alt, delay }: LanguagesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2, delay }}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className="size-8 md:size-10 hover:translate-y-[-4px] duration-300"
      />
    </motion.div>
  );
};

export default Languages;
