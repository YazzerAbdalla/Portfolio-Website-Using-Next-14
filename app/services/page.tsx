"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";

import { motion } from "framer-motion";

interface servicesState {
  num: number;
  title: string;
  description: string;
  href?: string;
}

const Services = () => {
  const [servicesData, setServicesData] = useState<servicesState[]>([]);

  useEffect(() => {
    const query = `*[_type == "services"]`;

    // Fetch data from Sanity
    client
      .fetch(query)
      .then((data) => {
        setServicesData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent transition-all">
                    {service.num}
                  </div>
                  <Link
                    href={service.href ? service.href : ""}
                    aria-label="Service link"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className=" font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <h3 className="text-white/60">{service.description}</h3>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
