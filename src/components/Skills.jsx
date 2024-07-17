import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/js.png"
import TAILWIND from "../assets/tailwind.png"
import MUI from "../assets/mui.png"
import REACT from "../assets/react.png"
import REDUX from "../assets/redux.png"
import TYPESCRIPT from "../assets/typescript.png"
import FRAMER from "../assets/framer.png"
import NEXT from "../assets/nextjs.png"
const Skills = () => {
    const Skill_data = [
        {
          skill_name: "Html 5",
          Image: HTML,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Css",
          Image: CSS,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Java Script",
          Image: JS,
          width: 65,
          height: 65,
        },
        {
          skill_name: "Tailwind Css",
          Image: TAILWIND,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Mui",
          Image: MUI,
          width: 80,
          height: 80,
        },
        {
          skill_name: "React",
          Image: REACT,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Redux",
          Image: REDUX,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Typescript",
          Image: TYPESCRIPT,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Framer",
          Image: FRAMER,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Next Js",
          Image: NEXT,
          width: 80,
          height: 80,
        },
      ];      
      
      const Frontend_skill = [
        {
          skill_name: "Html 5",
          Image: HTML,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Css",
          Image: CSS,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Java Script",
          Image: JS,
          width: 65,
          height: 65,
        },
        {
          skill_name: "Tailwind Css",
          Image: TAILWIND,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Material UI",
          Image: MUI,
          width: 80,
          height: 80,
        },
        {
          skill_name: "React",
          Image: REACT,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Redux",
          Image: REDUX,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Type Script",
          Image: TYPESCRIPT,
          width: 80,
          height: 80,
        },
        {
          skill_name: "Next js 13",
          Image: NEXT,
          width: 80,
          height: 80,
        },
      ];
      
    //   const Backend_skill = [
    //     {
    //       skill_name: "Node js",
    //       Image: "/node-js.png",
    //       width: 80,
    //       height: 80,
    //     },
    //     {
    //       skill_name: "Express js",
    //       Image: "/express.png",
    //       width: 80,
    //       height: 80,
    //     },
    //     {
    //       skill_name: "Mongo db",
    //       Image: "/mongodb.png",
    //       width: 40,
    //       height: 40,
    //     },
    //     {
    //       skill_name: "Fire base",
    //       Image: "/Firebase.png",
    //       width: 55,
    //       height: 55,
    //     },
    //     {
    //       skill_name: "Postger SQL",
    //       Image: "/postger.png",
    //       width: 70,
    //       height: 70,
    //     },
    //     {
    //       skill_name: "My SQL",
    //       Image: "/mysql.png",
    //       width: 70,
    //       height: 70,
    //     },
    //     {
    //       skill_name: "Prisma",
    //       Image: "/prisma.webp",
    //       width: 70,
    //       height: 70,
    //     },
    //     {
    //       skill_name: "Graphql",
    //       Image: "/graphql.png",
    //       width: 80,
    //       height: 80,
    //     },
    //   ];
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
