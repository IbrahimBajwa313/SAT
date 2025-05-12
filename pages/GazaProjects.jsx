import ReliefActivityFull from "@/components/ReliefActivityFull";
import React from "react";

const GazaProjects = () => {
  const palestineProjects = [
    {
      title: "Water Projects",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 55,
      goal: 1000,
      status: "active",
    },
    {
      title: "Food Distribution",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 75,
      goal: 5000,
      status: "active",
    },
    {
      title: "Medical Assistance",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 60,
      goal: 10000,
      status: "urgent",
    },
    {
      title: "Clothing & Essentials",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 80,
      goal: 3000,
      status: "goalReached",
    },
    {
      title: "Shelter & Housing",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
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
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 90,
      goal: 7000,
      status: "closed",
    },
    {
      title: "Cash Distribution",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 40,
      goal: 8000,
      status: "active",
    },
    {
      title: "Ration Drives",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 65,
      goal: 4000,
      status: "urgent",
    },
    {
      title: "Ramadan Special Project",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis magnam ducimus cumque, porro autem minima nam ad aspernatur, expedita accusamus impedit, amet adipisci corporis suscipit reprehenderit quas eius earum. Pariatur cum sunt illum. Odio repellendus quod harum, maxime esse blanditiis porro distinctio voluptatum ullam repudiandae cupiditate tempore atque ratione quae odit. Eos eius, blanditiis nobis voluptates debitis et quasi!",
      images: [
        "carousels/protest4.jpg",
        "carousels/protest1.jpg",
        "carousels/protest2.jpg",
        "carousels/protest3.jpg",
      ],
      progress: 100,
      goal: 5000,
      status: "closed",
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
