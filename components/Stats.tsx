"use client";

import sortStats from "@/functions/sortStats";
import { client } from "@/lib/sanityClient";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export interface statsDataState {
  num: number;
  text: string;
}

const Stats = () => {
  const [statsData, setStatsData] = useState<statsDataState[]>([]);

  useEffect(() => {
    const query = `*[_type == "stats"]`;

    // Fetch data from Sanity
    client
      .fetch(query)
      .then((data) => {
        setStatsData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {sortStats(statsData).map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="flex">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p className="text-4xl xl:text-6xl font-extrabold">
                    {item.text.includes("Core") ? "+" : ""}
                  </p>
                </div>

                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
