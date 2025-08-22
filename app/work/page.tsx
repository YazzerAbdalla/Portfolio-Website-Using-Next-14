/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Swiper as swiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Project } from "@/types/workTypes";
import { client, urlFor } from "@/lib/sanityClient";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import ToolKitContainer from "@/components/ToolKitContainer";

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project>();

  const handleSlideChange = (swiper: swiperType) => {
    const currentI = swiper.activeIndex;
    setProject(projects[currentI]);
  };

  useEffect(() => {
    const query = `*[_type == "projects"] | order(num asc)`;

    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        setProject(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
        {/* text */}
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[20px] h-[50%]">
            {/* outline num */}
            <h1 className="text-6xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
              {project?.num}
            </h1>
            {/* project category */}
            <h2 className="md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize min-h-[42px]">
              {project?.category} Project
            </h2>
            <div className="flex gap-3 flex-col">
              {/* project description */}
              <p className="text-white/60 text-sm md:text-base min-h-[40px] ">
                {project?.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2 md:gap-4 min-h-[32px]">
                {project?.stack?.map((item, index) => {
                  return (
                    <li
                      className="text-base md:text-xl text-accent"
                      key={index}
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
            </div>
            {/* buttons */}
            <div className="flex items-center gap-4">
              {/* live project button */}
              {project && project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to live"
                >
                  <ToolKitContainer content={project.category + " live"}>
                    <BsArrowUpRight className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                  </ToolKitContainer>
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
                  <ToolKitContainer content={project.category + " github repo"}>
                    <BsGithub className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                  </ToolKitContainer>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* slide */}
        <div className="w-full xl:w-[50%] overflow-hidden">
          <Swiper
            watchSlidesProgress
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
                        src={urlFor(project.image.asset._ref)
                          .width(800)
                          .height(600)
                          .url()}
                        alt={`${project.category} project`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={index === 0} // only for the first slide
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
    </section>
  );
};

export default Work;
