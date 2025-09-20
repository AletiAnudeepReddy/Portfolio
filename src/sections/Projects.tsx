import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import moodcanvas from "@/assets/images/moodcanvas.png";
import feelify from "@/assets/images/feelify.png";
import stylesense from "@/assets/images/stylesense.png";
import validlyai from "@/assets/images/validlyai.png";
import tripgenie from "@/assets/images/tripgenie.png";
import agriconnect from "@/assets/images/agriconnect.png";
import { Butterfly_Kids } from "next/font/google";
import Image from "next/image";
import { CheckCircleIcon } from "lucide-react";
import { ArrowUpRightIcon } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    tools: ["Next.js", "OpenAI API", "MongoDB", "Web Scraping"],
    title: "ValidlyAI - Startup Idea Validator",
    results: [
      { title: "AI-powered SWOT analysis" },
      { title: "Competitor research with NLP" },
      { title: "Market trend visualization with charts" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: validlyai,
  },
  {
    tools: ["Next.js", "React", "MongoDB", "OpenAI API", "Stability AI"],
    title: "MoodCanvas - Mood Based Daily Wallpaper Generator",
    results: [
      { title: "Generates AI wallpapers based on your mood" },
      { title: "Personalized daily quotes with images" },
      { title: "User login with saved wallpaper history" },
    ],
    link: "https://youtu.be/your_moodcanvas_demo_link",
    image: moodcanvas,
  },
  {
    tools: ["Next.js", "TailwindCSS", "OpenAI API", "Google Maps API"],
    title: "TripGenie - Smart Travel Itinerary Planner",
    results: [
      { title: "Generates custom travel plans with AI" },
      { title: "Integrates maps for trip visualization" },
      { title: "Suggests budget, routes, and activities" },
    ],
    link: "https://youtu.be/your_tripgenie_demo_link",
    image: tripgenie,
  },
  {
    tools: ["React", "Node.js", "MongoDB", "OpenAI API"],
    title: "Feelify - Emotion Based Music & Content Recommender",
    results: [
      { title: "Analyzes emotions through user input" },
      { title: "Recommends music, quotes, and content" },
      { title: "Tracks mood history with analytics" },
    ],
    link: "https://youtu.be/your_feelify_demo_link",
    image: feelify,
  },
  {
    tools: ["HTML&CSS", "Node.js", "Express", "MongoDB", "Sentiment Analysis"],
    title: "AgriConnect - Farmer & Laborer Platform",
    results: [
      { title: "Job posting and application system" },
      { title: "Laborer ratings and sentiment analysis" },
      { title: "Farmer dashboard with CRUD jobs" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: agriconnect,
  },
  {
    tools: ["Next.js", "Tailwind CSS", "FastAPI", "PyTorch"],
    title: "StyleSense - AI Fashion Recommendation",
    results: [
      { title: "Classifies fashion style using CNN" },
      { title: "Fetches similar outfits via APIs" },
      { title: "Explore page with branded product grids" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: stylesense,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex items-center justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 md:text-lg lg:text-xl max-w-md mx-auto mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="space-y-20 md:mt-20 mt-10 relative">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 pb-0 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 30}px)`, // ✅ note the space before +
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase
                tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    {project.tools.map((tool, index) => (
                      <span key={index}>
                        {tool}
                        {index < project.tools.length - 1 && (
                          <span>&bull;</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 md:mt-5 mt-4" />
                  <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-4 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white hover:scale-105 transition duration-300 hover:bg-white/70 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 border-2 border-white/15 lg:absolute lg:h-full
                    lg:w-auto lg:max-w-none rounded-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
