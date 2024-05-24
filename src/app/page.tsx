"use client";

{
  /* Imports Next */
}
import Image from "next/image";
import Link from "next/link";

{
  /* Framer Motion */
}
import { motion } from "framer-motion";

{
  /* Components */
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Categorys from "@/components/categorys";

{
  /* Icones */
}
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import Languages from "@/components/languages";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      {/* Avatar */}
      <div className="flex flex-col space-y-5 md:justify-between items-center w-full bg-[--nightBlack] rounded-xl p-3 md:w-[25%] md:fixed md:left-2 md:top-8 md:h-[91%]">
        <Avatar className="size-28 md:size-36 border-8 border-[--metalBlack] md:mt-3">
          <AvatarImage src="/foto.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="font-bold text-[--color-white]">Pedro Gontijo Braz</h1>
        <div className="w-full px-2">
          <Separator className="bg-[--metalBlack] rounded-full w-full" />
        </div>
        <div className="w-full px-6 space-y-1">
          <div className="flex justify-between">
            <div className="text-[--color-white] font-semibold">
              <h2>Country:</h2>
            </div>
            <div className="text-[--textColor]">
              <span>Brasil</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[--color-white] font-semibold">
              <h2>City:</h2>
            </div>
            <div className="text-[--textColor]">
              <span>São Paulo</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[--color-white] font-semibold">
              <h2>Age:</h2>
            </div>
            <div className="text-[--textColor]">
              <span>16 years</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 w-full rounded-xl p-5 bg-[--metalBlack]">
          <span className="font-bold text-[--color-white]">Contacts</span>
          <div className="flex justify-center gap-6 w-full">
            <motion.div
              className="flex space-y-1 text-[--textColor] flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="rounded-full hover:text-[--color-theme]"
                href="https://www.instagram.com/pedr0_br4z/" target="_blank"
              >
                <div className="border border-[--textColor] rounded-full p-2 hover:border-[--color-theme] duration-300">
                  <IoLogoInstagram size={24} />
                </div>
              </Link>
              <span>Instagram</span>
            </motion.div>
            <motion.div
              className="flex space-y-1 text-[--textColor] flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay:0.3 }}
            >
              <Link
                className="rounded-full hover:text-[--color-theme]"
                href="https://github.com/pedrogbraz" target="_blank"
              >
                <div className="border border-[--textColor] rounded-full p-2 hover:border-[--color-theme] duration-300">
                  <IoLogoGithub size={24} />
                </div>
              </Link>
              <span>Github</span>
            </motion.div>
            <motion.div
              className="flex space-y-1 text-[--textColor] flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay:0.6 }}
            >
              <Link
                className="rounded-full hover:text-[--color-theme]"
                href="https://www.linkedin.com/in/pedro-gontijo-braz-7b6014268/" target="_blank"
              >
                <div className="border border-[--textColor] rounded-full p-2 hover:border-[--color-theme] duration-300">
                  <IoLogoLinkedin size={24} />
                </div>
              </Link>
              <span>Linkedin</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="md:w-[74%] md:ml-[26%] space-y-3">
        {/* Home */}
        <div className="flex flex-col space-y-8 bg-[--nightBlack] rounded-xl p-8">
          <Categorys
            name="INTRODUCTION"
            title="Specialist"
            span="Web Development"
          />
          <div className="text-[--textColor] md:max-w-[70%]">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              exit={{ opacity: 0, x: 60 }}
            >
              As a{" "}
              <span className="text-[--color-white] font-medium">
                Front End Developer
              </span>
              , I excel in crafting innovative solutions that surpass
              expectations and drive project success. My focus is on creating
              dynamic, visually appealing digital experiences while prioritizing
              collaboration and communication to ensure exceptional results that
              meet both present and future digital landscape needs.
            </motion.p>
          </div>
          <div className="text-[--textColor] flex gap-6">
            <motion.span
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <IoCheckmarkDone className="text-green-400" size={18} />
              CLT/PJ/Freelancer
            </motion.span>
            <motion.span
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <IoCheckmarkDone className="text-green-400" size={18} />
              Available for projects
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Button className="p-5 md:text-base md:p-6 text-[--color-white] flex gap-1.5 items-center rounded-full bg-[--color-theme] duration-300 hover:bg-[--color-theme]">
              <LuSend size={15} />
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>

        {/* Biography */}
        <div className="flex flex-col space-y-12 bg-[--nightBlack] rounded-xl p-8">
          <div className="text-[--textColor] space-y-6">
            <Categorys name="biography" title="About" span="Me" />
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.3 }}
            >
              Pedro Gontijo Braz, a{" "}
              <span className="text-white font-medium">
                Front End Developer
              </span>{" "}
              passionate about technology and driven by the creation of
              innovative digital solutions. Additionally, advancing knowledge
              through the{" "}
              <span className="text-white font-medium">
                Professional Certificate Program in Computer Science
              </span>{" "}
              at{" "}
              <span className="text-white font-medium">Harvard University</span>
              , recognized for active participation in activities and societies,
              including the renowned{" "}
              <span className="text-white font-medium">HarvardX CS50s.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Constantly seeking to expand knowledge in{" "}
              <span className="text-white font-medium">
                Python, Java, C#, and .NET
              </span>
              , with an{" "}
              <span className="text-white font-medium">
                unwavering passion for tackling complex challenges .
              </span>
              Prepared to make significant contributions with diverse skills and
              valuable expertise in any professional environment.
            </motion.p>
          </div>
          <Separator className="bg-[--metalBlack]" />
          <div className="space-y-6">
            <Categorys name="skills" title="My" span="Skills" />
            <div className="text-[--textColor] space-y-6 md:space-y-10">
              <motion.p
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                Below, on the left, you&apos;ll see languages I am knowledge
                about, and on the right, the ones I am learning:
              </motion.p>
              <div className="flex flex-col space-y-2 items-center">
                <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:w-full md:gap-4 md:justify-center">
                  <div className="flex bg-[--metalBlack] rounded-xl gap-3 p-2 md:px-4 md:py-3 justify-center items-center">
                    {[
                      { src: "html5.svg", alt: "Logo HTML5" },
                      { src: "css3.svg", alt: "Logo CSS3" },
                      { src: "js.svg", alt: "Logo JavaScript" },
                      { src: "tailwind.svg", alt: "Logo Tailwindcss" },
                      { src: "react.svg", alt: "Logo React" },
                      { src: "nextjs.svg", alt: "Logo Nextjs" },
                      { src: "typescript.svg", alt: "Logo Typescript" },
                      { src: "nodejs.svg", alt: "Logo Nodejs" },
                    ].map((item, index) => (
                      <Languages
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        delay={index * 0.3} // Incrementando o delay
                      />
                    ))}
                  </div>
                  <div className="flex bg-[--metalBlack] rounded-xl gap-3 p-2 md:px-4 md:py-3 justify-center items-center">
                    {[
                      { src: "java.svg", alt: "Logo Java" },
                      { src: "sass.svg", alt: "Logo Sass" },
                      { src: "spring.svg", alt: "Logo Spring Framework" },
                      { src: "linux.svg", alt: "Logo Linux" },
                    ].map((item, index) => (
                      <Languages
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        delay={(index + 8) * 0.3} // Incrementando o delay
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get in touch */}
        <div className="flex flex-col space-y-6 bg-[--nightBlack] rounded-xl p-8">
          <Categorys name="contact" title="Get in" span="Touch" />
          <motion.p
            className="text-[--textColor]"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
          >
            Below, you can contact me via email.
          </motion.p>
          <div className="text-[--textColor] space-y-6">
            <div className="flex flex-col space-y-2 mx-[10%] md:mx-[30%] md:mt-4">
              <motion.input
                type="text"
                name=""
                id=""
                className="rounded-full bg-[--metalBlack] outline-none px-4 py-3 text-sm focus:border focus:border-[--color-theme]"
                placeholder="Enter your name"
                required
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.input
                type="text"
                name=""
                id=""
                className="rounded-full bg-[--metalBlack] outline-none px-4 py-3 text-sm focus:border focus:border-[--color-theme]"
                placeholder="Enter your emails"
                required
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
              />
              <motion.input
                type="text"
                name=""
                id=""
                className="rounded-full bg-[--metalBlack] outline-none px-4 py-3 text-sm focus:border focus:border-[--color-theme]"
                placeholder="Enter the subject"
                required
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.3 }}
              />
              <motion.textarea
                className="rounded-xl bg-[--metalBlack] resize-none h-48 outline-none px-4 py-3 text-sm focus:border focus:border-[--color-theme]"
                placeholder="Type the message"
                required
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Button className="w-full bg-[--metalBlack] rounded-full hover:bg-[--metalBlack] hover:text-[--color-theme] duration-300 focus:border focus:border-[--color-theme]">
                  Send
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center">
          <p className="text-center text-[--textColor] text-sm w-80">
            © 2024{" "}
            <Link
              className="hover:text-[--color-theme] duration-300"
              href="https://github.com/pedrogbraz"
            >
              Pedro Gontijo Braz
            </Link>{" "}
            - All Rights Reserved. Elevating your digital experience.
          </p>
        </div>
      </div>
    </div>
  );
}
