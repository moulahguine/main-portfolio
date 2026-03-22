import { technologies } from "@/data/skillsData";
import { IMAGE_ASSETS } from "@/assets/images";

const porfolio =
  "https://ik.imagekit.io/moulahguine/myPortfolio/projects/myPortfolio?tr=f-auto,q-92,dpr-2,w-1200,h-800";
const modernLandingPage =
  "https://ik.imagekit.io/moulahguine/myPortfolio/projects/myPortfolio?tr=f-auto,q-92,dpr-2,w-1200,h-800";

// Single source of truth for all project metadata
const projectsData = [
  {
    id: 1,
    slug: "personal-frontend-portfolio",
    title: "Personal Frontend Developer Portfolio",
    description:
      "How I turn UI ideas into smooth, real interactions. Built to show how I think, not just what I know.",
    year: 2024,
    featured: true,

    color: "#b4c7c1",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        techKey: technologies.NextJS.name,
        name: technologies.NextJS.name,
        icon: technologies.NextJS.icon,
        color: technologies.NextJS.color,
      },
      {
        techKey: technologies.Sass.name,
        name: technologies.Sass.name,
        icon: technologies.Sass.icon,
        color: technologies.Sass.color,
      },
      {
        techKey: technologies.FramerMotion.name,
        name: technologies.FramerMotion.name,
        icon: technologies.FramerMotion.icon,
        color: technologies.FramerMotion.color,
      },
    ],

    media: {
      image: porfolio,
      fallback: IMAGE_ASSETS.projects.myPortfolio,
    },
  },

  {
    id: 2,
    slug: "modern-landing-page",
    title: "Modern Landing Page",
    description:
      "Focused on lightweight, high-performance interface design. Handled responsive layouts, smooth scrolling, and cross-device consistency to deliver a visually clean and engaging landing page.",
    year: 2022,
    featured: false,

    color: "#f2f1f2",

    demoLink: "https://modern-landingpage.netlify.app/",
    githubLink: "https://github.com/moulahguine/modern-landingpage",

    technologies: [
      {
        techKey: technologies.HTML.name,
        name: technologies.HTML.name,
        icon: technologies.HTML.icon,
        color: technologies.HTML.color,
      },
      {
        techKey: technologies.CSS.name,
        name: technologies.CSS.name,
        icon: technologies.CSS.icon,
        color: technologies.CSS.color,
      },
      {
        techKey: technologies.JavaScript.name,
        name: technologies.JavaScript.name,
        icon: technologies.JavaScript.icon,
        color: technologies.JavaScript.color,
      },
    ],

    media: {
      image: modernLandingPage,
      fallback: IMAGE_ASSETS.projects.myPortfolio,
    },
  },
];

export default projectsData;
