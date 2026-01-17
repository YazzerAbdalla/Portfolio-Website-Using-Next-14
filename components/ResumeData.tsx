import { client } from "@/lib/sanityClient";
import { Education, Experience, ResumeState } from "@/types/resumeTypes";
import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss, SiNextdotjs, SiNestjs, SiExpress, SiDocker } from "react-icons/si";

const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeState>({
    title: "",
    description: "",
    info: [{ fieldName: "", fieldValue: "" }],
  });
  const [expData, setExpData] = useState<Experience>();
  const [eduData, setEduData] = useState<Education>();

  useEffect(() => {
    // Fetch resume data
    const fetchResumeData = async () => {
      try {
        const resumeQuery = `*[_type == "resume"]`;
        const resumeResult = await client.fetch(resumeQuery);
        setResumeData(resumeResult[0]);
      } catch (error) {
        console.error("Failed to fetch resume data:", error);
      }
    };

    // Fetch experience data
    const fetchExpData = async () => {
      try {
        const expQuery = `*[_type == "experience"]`;
        const expResult = await client.fetch(expQuery);
        setExpData(expResult[0]);
      } catch (error) {
        console.error("Failed to fetch experience data:", error);
      }
    };

    // Fetch education data
    const fetchEduData = async () => {
      try {
        const eduQuery = `*[_type == "education"]`;
        const eduResult = await client.fetch(eduQuery);
        setEduData(eduResult[0]);
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      }
    };

    // Call the fetch functions
    fetchResumeData();
    fetchExpData();
    fetchEduData();
  }, []);

  const skills = {
    title: "Skills",
    description:
      "Technologies and tools I use to build fast, scalable, and production-ready web applications.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS3",
      },
      {
        icon: <FaJs />,
        name: "JavaScript (ES6+)",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <SiNestjs />,
        name: "NestJS",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiDocker />,
        name: "Docker",
      },
      {
        icon: <FaGitAlt />,
        name: "Git & GitHub",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
    ],
  };

  return { resumeData, expData, eduData, skills };
};

export default useResumeData;
