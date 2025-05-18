import ReliefActivityFull from "@/components/ReliefActivityFull";
import React from "react";

const GazaProjects = () => {
  const palestineProjects = [
    {
      title: "Water Tankers Distribution",
      description:
        "In response to the water crisis in Gaza, we arrange water tanker services to deliver clean, safe drinking water to communities. Every drop counts in restoring health and hope. This effort brings relief to families struggling for their survival.",
      images: [
        "carousels/waterDistribution/1.jpg",
        "carousels/waterDistribution/2.jpg",
        "carousels/waterDistribution/3.jpg",
        "carousels/waterDistribution/4.jpg",
      ],
      progress: 55,
      goal: 1000,
      status: "active",
    },
    {
      title: "Food Distribution",
      description:
        "We provide freshly cooked hot meals daily to families in Gaza affected by war and displacement. Each meal is prepared with care to ensure nutrition and dignity for those who've lost access to basic needs. It's a small act of love to ease their unimaginable hardship.",
      images: [
        "carousels/foodDistribution/1.jpg",
        "carousels/foodDistribution/2.jpg",
        "carousels/foodDistribution/3.jpg",
        "carousels/foodDistribution/4.jpg",
      ],
      progress: 75,
      goal: 5000,
      status: "active",
    },
    {
      title: "Ramadan Special Project",
      description:
        "Gaza fasted under bombs, with little to break their fast. We provided iftars, suhoors, and Eid gifts amid destruction. Our efforts brought warmth, faith, and smiles to shattered homes. Despite war, they felt the blessings of Ramadan. With your help, we turned pain into prayer.",
      images: [
        "carousels/ramadanSpecialProject/1.jpg",
        "carousels/ramadanSpecialProject/2.jpg",
        "carousels/ramadanSpecialProject/3.jpg",
        "carousels/ramadanSpecialProject/4.jpg",
      ],
      progress: 100,
      goal: 5000,
      status: "closed",
    },
    {
      title: "Medical Assistance",
      description:
        "Gaza's hospitals are overwhelmed, with many destroyed in airstrikes. Injured civilians and children urgently need medical care and supplies. We provide treatment, mobile clinics, and essential medicines. Our support is often the only lifeline for the wounded. Your help keeps Gaza's medical relief running amid chaos",
      images: [
        "carousels/medicalAssistance/1.jpg",
        "carousels/medicalAssistance/2.jpg",
        "carousels/medicalAssistance/3.jpg",
        "carousels/medicalAssistance/4.jpg",
      ],
      progress: 60,
      goal: 10000,
      status: "urgent",
    },

    {
      title: "Clothing & Essentials",
      description:
        "Bombings have left families with nothing but what they wore while fleeing. We provide seasonal clothes, hygiene kits, and basic necessities. These items protect against harsh weather and poor sanitation. Each kit restores dignity and comfort to the displaced. In war, even a bar of soap can mean the world.",
      images: [
        "carousels/clothing/1.jpg",
        "carousels/clothing/2.jpg",
        "carousels/clothing/3.jpg",
        "carousels/clothing/4.jpg",
      ],
      progress: 80,
      goal: 3000,
      status: "goalReached",
    },
    {
      title: "Shelter & Housing",
      description:
        "Thousands of homes and mosques have been destroyed in Gaza. Families sleep on rubble, exposed to the elements and fear. We set up emergency tents and aim to rebuild shelters. Housing is a step toward healing and safety. Help us give them a roof and a reason to hope.",
      images: [
        "carousels/shelter/1.jpg",
        "carousels/shelter/2.jpg",
        "carousels/shelter/3.jpg",
        "carousels/shelter/4.jpg",
      ],
      progress: 50,
      goal: 150,
      status: "active",
    },
    {
      title: "Family Support Program",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest/1.jpg",
        "carousels/protest/2.jpg",
        "carousels/protest/3.jpg",
        "carousels/protest/4.jpg",
      ],
      progress: 90,
      goal: 7000,
      status: "closed",
    },
    {
      title: "Cash Distribution",
      description:
        "Amid Gaza's destroyed economy, cash aid is urgently needed. Families can’t access banks or buy essentials without help. We provide direct financial support for rent, food, or meds. Cash gives war victims control over their urgent needs. Your donation becomes their chance at survival.",
      images: [
        "carousels/cashDistribution/1.jpg",
        "carousels/cashDistribution/2.jpg",
        "carousels/cashDistribution/3.jpg",
        "carousels/cashDistribution/4.jpg",
      ],
      progress: 40,
      goal: 8000,
      status: "active",
    },
    {
      title: "Ration Drives",
      description:
        "Food supplies are blocked or destroyed in war zones. Our team delivers rations like flour, lentils,oil & vegetables to homes. Each pack supports a family for several days. We ensure no one goes to bed hungry in Gaza. Your support fills their empty kitchens and hearts.",
      images: [
        "carousels/rationDrives/1.jpg",
        "carousels/rationDrives/2.jpg",
        "carousels/rationDrives/3.jpg",
        "carousels/rationDrives/4.jpg",
      ],
      progress: 65,
      goal: 4000,
      status: "urgent",
    },
  ];
  return (
    <div className="bg-[#eff6ff] py-8">
      {/* Use ReliefActivitySummary component to maybe create a ReliefActivityFull component which contains the full details of an activity and also a carousel and is rendered in the GazaProjects page */}

      <div>
        {/* <h3 className="text-2xl sm:text-3xl text-center font-bold text-red-700 mb-6">
          Palestine Projects
        </h3> */}
        <div>
          {palestineProjects.map((project, index) => (
            <ReliefActivityFull
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              progress={project.progress}
              goal={project.goal}
              initialStatus={project.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GazaProjects;
