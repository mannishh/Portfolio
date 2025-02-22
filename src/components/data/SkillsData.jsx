import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { LiaDocker } from "react-icons/lia";


const SkillsData = {
  Frontend: [
    { name: "React", icon: <FaReact className="w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine className="w-8 h-8" /> },
    { name: "HTML/CSS", icon: <FaHtml5 className="w-8 h-8" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="w-8 h-8" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <IoLogoNodejs className="w-8 h-8" /> },
    { name: "Express", icon: <SiExpress className="w-8 h-8" /> },
  ],
  "Database & DevOps": [
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
    { name: "MongoDB", icon: <TbBrandMongodb className="w-8 h-8" /> },
    { name: "Git", icon: <FaGitAlt className="w-8 h-8" /> },
    { name: "Docker", icon: <LiaDocker className="w-8 h-8" /> },
  ],
};

export default SkillsData;
