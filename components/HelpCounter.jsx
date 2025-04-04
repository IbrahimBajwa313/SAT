import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Heading from "@/components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTshirt,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

export default function HelpCounter() {
  const counters = [
    {
      id: 1,
      endValue: 20000,
      label: "Meals Fed",
      duration: "5",
      icon: (
        <FontAwesomeIcon icon={faUtensils} className="size-10 text-[#22C55E]" />
      ),
    },
    {
      id: 2,
      endValue: 17600,
      label: "Clothes Donated",
      duration: "5",
      icon: (
        <FontAwesomeIcon icon={faTshirt} className="size-10 text-[#22C55E]" />
      ),
    },
    {
      id: 3,
      endValue: 4500,
      label: "Medically Assisted",
      duration: "5",
      icon: (
        <FontAwesomeIcon icon={faMedkit} className="size-10 text-[#22C55E]" />
      ),
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
        className="flex flex-col gap-4 justify-center items-center text-black rounded-2xl shadow-lg p-6 bg-white transition-transform transform hover:scale-105"
      >
        {counter.icon}
        <div className="flex flex-col justify-center items-center text-center">
          {inView && (
            <CountUp
              start={0}
              end={counter.endValue}
              duration={counter.duration}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            />
          )}
          <span className="mt-2 text-base sm:text-lg md:text-xl">
            {counter.label}
            <span className="text-sm font-mono text-[#22C55E]"> / Month</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-cover bg-center h-[40vh] max-h-[500px] min-h-[450px] px-4 sm:px-8 md:px-16 lg:px-28 flex flex-col justify-center items-center gap-12 overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <Heading
        className="text-black text-center text-3xl sm:text-4xl md:text-5xl font-bold"
        text="Our Efforts"
      />
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        {counters.map((counter) => (
          <CounterBox key={counter.id} counter={counter} />
        ))}
      </div>
    </div>
  );
}