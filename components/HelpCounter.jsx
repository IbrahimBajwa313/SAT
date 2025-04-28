import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Heading from "@/components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faTshirt, faMedkit } from "@fortawesome/free-solid-svg-icons";

export default function HelpCounter() {
  const counters = [
    {
      id: 1,
      endValue: 60000,
      label: "Meals Fed",
      duration: "5",
      icon: <FontAwesomeIcon icon={faUtensils} className="size-10 text-[#22C55E]" />,
    },
    {
      id: 2,
      endValue: 17600,
      label: "Clothes Donated",
      duration: "5",
      icon: <FontAwesomeIcon icon={faTshirt} className="size-10 text-[#22C55E]" />,
    },
    {
      id: 3,
      endValue: 2000000,
      label: "Cash Distribution",
      duration: "5",
      icon: <FontAwesomeIcon icon={faTshirt} className="size-10 text-[#22C55E]" />,
    },
    {
      id: 4,
      endValue: 4500,
      label: "Medically Assisted",
      duration: "5",
      icon: <FontAwesomeIcon icon={faMedkit} className="size-10 text-[#22C55E]" />,
    },
  ];

  const CounterBox = ({ counter }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <div
        ref={ref}
        className="flex flex-col gap-4 justify-center items-center text-black rounded-2xl shadow-md p-6 sm:p-8 bg-white transition-transform transform hover:scale-105 w-full sm:w-[260px] md:w-[280px]"
      >
        {counter.icon}
        <div className="text-center">
          {inView && (
            <CountUp
              start={0}
              end={counter.endValue}
              duration={parseInt(counter.duration)}
              className="text-4xl sm:text-5xl font-bold"
            />
          )}
          <div className="mt-2 text-base sm:text-lg">
            {counter.label}
            <span className="text-sm block font-mono text-[#22C55E]">/ Month</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-blue-50 px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20">
      <Heading
        className="text-black text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
        text="Our Efforts"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {counters.map((counter) => (
          <CounterBox key={counter.id} counter={counter} />
        ))}
      </div>
    </section>
  );
}
