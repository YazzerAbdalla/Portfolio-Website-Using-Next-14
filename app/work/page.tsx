/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/workTypes";
import { client, urlFor } from "@/lib/sanityClient";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper as swiperType } from "swiper/types";

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project>();

  const handleSlideChange = (swiper: swiperType) => {
    const currentI = swiper.activeIndex;
    setProject(projects[currentI]);
  };

  useEffect(() => {
    const query = `*[_type == "projects"]`;

    client
      .fetch(query)
      .then((data) => {
        const sortedProjects = data.sort((a: Project, b: Project) => {
          const numA = parseInt(a.num.replace(/\D/g, ""));
          const numB = parseInt(b.num.replace(/\D/g, ""));
          return numA - numB;
        });

        setProjects(sortedProjects);
        setProject(sortedProjects[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
        {/* text */}
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[20px] h-[50%]">
            {/* outline num */}
            <div className="text-6xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
              {project?.num}
            </div>
            {/* project category */}
            <h2 className="md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project?.category} Project
            </h2>
            {/* project description */}
            <p className="text-white/60 text-sm md:text-base">
              {project?.description}
            </p>
            {/* stack */}
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {project?.stack?.map((item, index) => {
                return (
                  <li className="text-base md:text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/20"></div>
            {/* buttons */}
            <div className="flex items-center gap-4">
              {/* live project button */}
              {project && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to live"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label="Go to live"
                        className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
              {/* github project button */}
              {project && project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to github repo"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label="Go to github repo"
                        className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* slide */}
        <div className="w-full xl:w-[50%] overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            className="xl:h-[520px] mb-12 mySwiper"
            onSlideChange={handleSlideChange}
          >
            {projects.length > 0 &&
              projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] md:h-[460px] relative group flex justify-center items-center bg-black/10">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(project.image.asset._ref).url()}
                        alt="Project image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 justify-between w-full xl:w-max"
              iconStyles="text-lg text-white"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Work;
