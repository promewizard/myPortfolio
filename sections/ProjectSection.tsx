import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import myPortfolio from "public/projects/my-portfolio.webp";
import freshMarket from "public/projects/fresh-market.webp";
import projectCanopy from "public/projects/project-canopy.webp";
import yeecall from "public/projects/yeecall.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/promewizard"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "My Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={myPortfolio}
        sizes="100vw"
        fill
        alt="My Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Welcome to my portfolio, a cutting-edge web application that combines the power of Next.js, Tailwind CSS, and TypeScript to deliver a seamless and visually stunning user experience. This project represents a perfect synergy of modern technologies for front-end development.",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://my-portfolio-o8a3.vercel.app//",
    codeUrl: "https://github.com/promewizard/myPortfolio.git",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "The Fresh Market",
    type: "Frontend",
    image: (
      <Image
        src={freshMarket}
        sizes="100vw"
        fill
        alt="https://www.thefreshmarket.com"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The Fresh Market is a destination for those looking to discover the best including convenient, restaurant-quality meals, hand-picked produce, premium baked goods, fresh-cut flowers, custom-cut meats and carefully curated offerings for holidays and special occasions.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
    liveUrl: "https://www.thefreshmarket.com/",
    codeUrl: "https://github.com/promewizard/",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Project Canopy",
    type: "Game",
    image: (
      <Image
        src={projectCanopy}
        sizes="100vw"
        fill
        alt="Project Canopy"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A first person survival adventure where you are sent to conduct scientific research on an alien jungle planet. The planet is completely covered in a layer of vegetation so thick that we have no way of detecting what lies beneath the Canopy.",
    tags: [
      "C#",
      "Unity",
      "Simulation GameRole-Playing GameAdventureAction",
      "Steam",
    ],
    liveUrl: "https://projectcanopygame.com",
    codeUrl: "https://github.com/promewizard/",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Yeecall",
    type: "Mobile App",
    image: (
      <Image
        src={yeecall}
        sizes="100vw"
        fill
        alt="Yeecall"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Yeecall - the revolutionary high-quality internet call, with HD Video & Voice technology, real-time photo & blackboard, offers an immersive communication experience as if all the people are at the same place.",
    tags: ["ReactAmazon", "Node.js", "Twilio", "APIWebRTCRESTful Architecture"],
    liveUrl:
      "https://play.google.com/store/apps/dev?id=9030960344933824144&hl=en&gl=US",
    codeUrl: "https://github.com/promewizard/",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
