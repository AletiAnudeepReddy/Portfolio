import { ArrowUpRightIcon } from "lucide-react";
const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anudeep-reddy-aleti-879816292/",
  },
  {
    title: "GitHub",
    href: "https://github.com/AletiAnudeepReddy",
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/anudeep_reddie_/",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container z-100 ">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-7">
            {footerLinks.map((link) => (
              <a
                target="_blank"
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:scale-105 transition duration-300 hover:text-emerald-300"
              >
                <span className="font-semibold ">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
