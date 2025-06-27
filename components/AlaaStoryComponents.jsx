import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AlaaStoryComponents = () => {
  const components = [
    {
      title: "A Hero's Widow",
      media: "/martyrs/1.jpg",
      type: "image",
      text: "Months after the world saw a Palestinian Man martyred in sajdah, a message reached us. His widow, Alaa, living in extreme poverty in Khan Yunis, had no food, no home, and three children to feed. Our local volunteers verified her identity and story—she was indeed the wife of the hero the world had mourned.",
    },
    {
      title: "Children Lost to Hunger",
      media: "/martyrs/2.jpg",
      type: "image",
      text: `One day, while Alaa, her daughter, and her mother-in-law went to the market, an airstrike hit their shelter — a UN school where they were taking refuge. Her two little sons, left behind waiting for food, were martyred. Her voice cracked with grief as she shared: “I didn’t weep that my children were martyred — I wept because they died hungry.”`,
    },
    {
      title: "Feeding with Love",
      media: "/martyrs/3.mp4",
      type: "video",
      text: "Our other volunteers, Yasmeen and Ahmed, rushed to support Alaa. A tent was set up, and with donations from our supporters, she was helped to start a small market stall. Alaa's heart wouldn’t let a hungry child go empty-handed—often giving food away until it was gone. She even made pizzas for the displaced children.",
    },
    {
      title: "Teaching in the Rubble",
      media: "/martyrs/4.jpg",
      type: "image",
      text: "Despite her losses, Alaa remained a beacon of strength. Once an English and Qur'an teacher, she began teaching again—inside a tent, under open skies. With your support, Qur'an lessons resumed for displaced children, bringing hope where there was none.",
    },
    {
      title: "Enduring Displacement",
      media: "/martyrs/5.mp4",
      type: "video",
      text: "Forced from Khan Yunis to Deir al-Balah and back again, Alaa endured relentless displacement. Her young daughter became critically ill, but medicine was impossible to find. The little angel became martyred. Despite these intense trials, Alaa kept serving and teaching wherever she could set up shelter.",
    },
    {
      title: "Her Final Message",
      media: "/martyrs/Alaa1.jpg",
      type: "image",
      text: `As the bombardment on Khan Yunis intensified, Alaa sent her last message: "I will pray for all of you, Dr Muhammad. You people helped us when none other did." Since then, there has been no contact. Later, we learned she had embraced martyrdom. Her story lives on, even if her voice has gone silent.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-20">
        {components.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-300`}
          >
            {/* Media Section */}
            <div className="w-full lg:w-1/2 h-[350px] relative">
              {item.type === "image" ? (
                <Image
                  src={item.media}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-none"
                />
              ) : (
                <video
                  src={item.media}
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-10 bg-gray-50 flex flex-col justify-between h-[350px]">
              <div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-green-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium max-h-[180px] overflow-y-auto pr-2">
                  {item.text}
                </p>
              </div>
              <div className="mt-6 text-sm text-gray-500 italic text-right">
                — From the story of Alaa
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlaaStoryComponents;
