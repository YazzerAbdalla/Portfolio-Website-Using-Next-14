import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pl-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <h1 className="h1 -mb-2">
              Hello, I&apos;m{" "}
              <span className="text-accent">Yasser Abdalla</span>{" "}
              <span className="text-[18px]">from cairo</span>
            </h1>
            <span className="text-[40px] ">Software Developer</span>
            <p className="text-[22px] mb-9 mt-6 text-white/80">
              I&apos;m a junior developer with React.js skills, I aspire to gain
              more experience by working on advanced applications, supporting
              key features, and improving workflows. I aim to contribute to code
              quality and be an active part of a collaborative team.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button size={"lg"} className="uppercase flex items-center gap-2">
                <a
                  href="/yasser-abdalla-resume.pdf"
                  download
                  className="uppercase flex items-center gap-2"
                >
                  <span className="font-extrabold text-[">Download CV</span>
                  <FiDownload className="text-xl " />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="text-accent w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div> */}
        </div>
      </div>
      <Stats />
    </section>
  );
}
