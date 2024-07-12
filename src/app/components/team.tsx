import { motion } from "framer-motion";
import { Award, Facebook, Instagram } from "iconsax-react";
import avatar from "../../../public/avatar.png";
import imaobong from "../../../public/ima-2.png";
import daniel from "../../../public/farm-guy-2.png";
import Image from "next/image";

export const Team = () => {
  const team = [
    {
      name: "Daniel Raphael",
      role: "CEO",
      briefDescription:
        "fun loving, foodie, experimental chef. The group trouble maker and the others won't agree but i bring the brightest ideas to the table",
      picture: daniel,
    },
    {
      name: "Imaobong Isaac",
      role: "Farm Supervisor",
      briefDescription:
        "fun loving, foodie, experimental chef. The group trouble maker and the others won't agree but i bring the brightest ideas to the table",
      picture: imaobong,
    },
    {
      name: "Edikan Obo",
      role: "Sales Representative",
      briefDescription:
        "fun loving, foodie, experimental chef. The group trouble maker and the others won't agree but i bring the brightest ideas to the table",
      picture: avatar,
    },
    {
      name: "Paul Francis",
      role: "Sales Representative",
      briefDescription:
        "fun loving, foodie, experimental chef. The group trouble maker and the others won't agree but i bring the brightest ideas to the table",
      picture: avatar,
    },
  ];
  return (
    <div
      className="pb-80 flex items-start lg:p-40 md:p-20 sm:p-10  gap-10 w-dvw"
      id="team"
    >
      <div className="sticky lg:top-[200px] md:top-[50px] sm:top-[50px]">
        <p className="text-sm font-semibold text-purple-600">-Team</p>
        <p className="lg:text-5xl md:text-2xl  sm:text-5xl sm:w-[350px] lg:w-[600px] md:w-[300px]">
          Teamwork, Smiles, People & Teeth.{" "}
          <span className="text-purple-600 lg:text-6xl md:text-4xl">*</span>
        </p>
        <div className="mt-3 flex gap-1 lg:max-h-[50%] lg:h-[50dvh] md:h-[40vh] sm:h-[30vh]">
          <div className="overflow-hidden box-border ">
            <motion.img
              src={"/team-2.jpg"}
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.2 }}
              alt={"broiler"}
              className="rounded-lg  lg:w-[600px] md:w-[400px]   lg:h-full md:h-full  sm:h-full sm:w-[400px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-1 lg:w-[600px] md:w-[400px]  box-border h-full sm:w-[400px] ">
            {" "}
            <motion.img
              src={"/team-3.jpg"}
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.2 }}
              alt={"broiler"}
              className="rounded-lg  w-full box-border object-cover h-[60%]"
            />
            <motion.img
              src={"/team-4.jpg"}
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.2 }}
              alt={"broiler"}
              className="rounded-lg  w-full box-border object-cover h-[40%] "
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 w-full box-border gap-1 sm:ml-[50px]">
        {team.map((member, index) => (
          <motion.div
            className="border border-slate-300 rounded-md p-2 lg:w-full md:w-[80%] box-border bg-white  sm:w-[250px]"
            key={index}
            initial={{
              y: 200,
            }}
            whileInView={{
              y: 50,
              rotateZ: index % 2 === 0 ? -5 : 5,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{
              originX: 0,
              rotateZ: 0,
              zIndex: 20000000,
              y: 0,
              scale: 1.1,
              cursor: "pointer",
            }}
          >
            <Image
              src={member?.picture}
              alt={member.name + "'s image"}
              className="rounded-lg  lg:w-full lg:h-[300px]  md:w-full md:h-[200px]  box-border lg:object-cover md:object-contain bg-yellow-300"
            />
            <div>
              <p className="text-md font-medium mt-3">{member.name}</p>
              <p className="text-slate-500 text-xs flex items-center">
                <Award
                  className="text-yellow-500 font-bold text-xs "
                  size={20}
                />
                {member.role}
              </p>

              <p className="text-xs font-medium mt-3 text-slate-500">
                A little about me
              </p>
              <p className="text-slate-500 text-xs font-light flex">
                {member.briefDescription}.&quot;
              </p>
              <div className="flex items-end w-full justify-end gap-1">
                {" "}
                <Instagram
                  className="text-slate-500 font-bold text-xs hover:text-yellow-500 ease-in-out duration-[400] "
                  size={20}
                />
                <Facebook
                  className="text-slate-500 font-bold text-xs  hover:text-yellow-500 ease-in-out "
                  size={20}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
