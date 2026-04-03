import { BsCursor } from "react-icons/bs";

import {
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaUniversalAccess,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiAxios,
  SiCsswizardry,
  SiDocker,
  SiExpress,
  SiFramer,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BsEmojiDizzy, BsShieldLock } from "react-icons/bs";

// Icon map
export const iconMap = {
  FaGithub,
  FaGitAlt,
  FaHtml5,
  BsCursor,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaUniversalAccess,
  FaMobileAlt,
  SiAxios,
  SiCsswizardry,
  SiDocker,
  SiExpress,
  SiFramer,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiZod,
  VscVscodeInsiders,
  BsShieldLock,
};

const DEFAULT_ICON = BsEmojiDizzy;

// SkillIcon component
function SkillIcon({ icon, color = "#6C757D", title, className }) {
  const IconComponent = iconMap[icon] ?? DEFAULT_ICON;
  const mergedClassName = ["skill-icon", className].filter(Boolean).join(" ");

  return (
    <span className={mergedClassName} title={title}>
      <IconComponent
        color={color}
        style={{ color }}
        aria-hidden={true}
        role="img"
      />
    </span>
  );
}

export default SkillIcon;

// Technologies mapping
export const technologies = {
  HTML: { name: "HTML", icon: "FaHtml5", color: "#E34F26" },
  CSS: { name: "CSS", icon: "SiCsswizardry", color: "#66309A" },
  Sass: { name: "Sass", icon: "SiSass", color: "#CC6699" },
  JavaScript: { name: "JavaScript", icon: "FaJs", color: "#F7DF1E" },
  TypeScript: { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },

  React: { name: "React", icon: "FaReact", color: "#61DAFB" },
  NextJS: { name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF" },
  Vite: { name: "Vite", icon: "SiVite", color: "#646CFF" },
  "React Router": {
    name: "React Router",
    icon: "SiReactrouter",
    color: "#CA4245",
  },

  TailwindCSS: {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
  },
  MUI: { name: "MUI", icon: "SiMui", color: "#007FFF" },
  FramerMotion: {
    name: "Framer Motion",
    icon: "SiFramer",
    color: "#0055FF",
  },

  cursor: { name: "cursor", icon: "BsCursor", color: "#000000" },
  Redux: { name: "Redux", icon: "SiRedux", color: "#764ABC" },
  ReactQuery: {
    name: "React Query",
    icon: "SiReactquery",
    color: "#FF4154",
  },
  Axios: { name: "Axios", icon: "SiAxios", color: "#5A29E4" },

  ReactHookForm: {
    name: "React Hook Form",
    icon: "SiReacthookform",
    color: "#EC5990",
  },
  Zod: { name: "Zod", icon: "SiZod", color: "#3E67B1" },

  Jest: { name: "Jest", icon: "SiJest", color: "#C21325" },
  ReactTestingLibrary: {
    name: "React Testing Library",
    icon: "SiTestinglibrary",
    color: "#E33332",
  },

  NodeJS: { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
  Express: { name: "Express", icon: "SiExpress", color: "#FFFFFF" },
  Prisma: { name: "Prisma", icon: "SiPrisma", color: "#2D3748" },
  PostgreSQL: { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
  Auth: { name: "Authentication", icon: "BsShieldLock", color: "#22C55E" },

  Git: { name: "Git", icon: "FaGitAlt", color: "#F05032" },
  GitHub: { name: "GitHub", icon: "FaGithub", color: "#FFFFFF" },
  Docker: { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  "VS Code": {
    name: "VS Code",
    icon: "VscVscodeInsiders",
    color: "#007ACC",
  },

  Figma: { name: "Figma", icon: "FaFigma", color: "#F24E1E" },
  REST: { name: "REST API", icon: "FaJs", color: "#FF6B6B" },
  Accessibility: {
    name: "Accessibility",
    icon: "FaUniversalAccess",
    color: "#4CAF50",
  },
  Responsive: {
    name: "Responsive Design",
    icon: "FaMobileAlt",
    color: "#9C27B0",
  },
};

// Reusable helper
const createSkill = ({ id, key, category, priority = 99 }) => ({
  id,
  key,
  category,
  priority,
  name: technologies[key].name,
  icon: technologies[key].icon,
  color: technologies[key].color,
});

// Skills data
export const skills = [
  // Frontend Core
  createSkill({
    id: 1,
    key: "HTML",
    category: "Frontend Core",
  }),
  createSkill({
    id: 2,
    key: "CSS",
    category: "Frontend Core",
  }),
  createSkill({
    id: 3,
    key: "Sass",
    category: "Frontend Core",
    priority: 6,
  }),
  createSkill({
    id: 4,
    key: "JavaScript",
    category: "Frontend Core",
    priority: 4,
  }),
  createSkill({
    id: 5,
    key: "TypeScript",
    category: "Frontend Core",
    priority: 3,
  }),
  createSkill({
    id: 6,
    key: "React",
    category: "Frontend Core",
    priority: 2,
  }),
  createSkill({
    id: 7,
    key: "NextJS",
    category: "Frontend Core",
    priority: 1,
  }),
  createSkill({
    id: 8,
    key: "Vite",
    category: "Frontend Core",
  }),
  createSkill({
    id: 9,
    key: "React Router",
    category: "Frontend Core",
  }),

  // Styling & UI
  createSkill({
    id: 10,
    key: "TailwindCSS",
    category: "Styling & UI",
    priority: 5,
  }),
  createSkill({
    id: 11,
    key: "MUI",
    category: "Styling & UI",
    priority: 7,
  }),
  createSkill({
    id: 12,
    key: "FramerMotion",
    category: "Styling & UI",
    priority: 8,
  }),
  createSkill({
    id: 13,
    key: "Responsive",
    category: "Styling & UI",
  }),
  createSkill({
    id: 14,
    key: "Accessibility",
    category: "Styling & UI",
  }),

  // State, Data & Forms
  createSkill({
    id: 16,
    key: "Redux",
    category: "State, Data & Forms",
    priority: 11,
  }),
  // createSkill({
  //   id: 17,
  //   key: "ReactQuery",
  //   category: "State, Data & Forms",
  // }),
  // createSkill({
  //   id: 18,
  //   key: "Axios",
  //   category: "State, Data & Forms",
  //   priority: 18,
  // }),
  createSkill({
    id: 19,
    key: "REST",
    category: "State, Data & Forms",
    priority: 19,
  }),
  createSkill({
    id: 20,
    key: "ReactHookForm",
    category: "State, Data & Forms",
    priority: 17,
  }),
  // createSkill({
  //   id: 21,
  //   key: "Zod",
  //   category: "State, Data & Forms",
  //   priority: 23,
  // }),

  // Testing
  createSkill({
    id: 22,
    key: "Jest",
    category: "Testing",
    priority: 24,
  }),
  // createSkill({
  //   id: 23,
  //   key: "ReactTestingLibrary",
  //   category: "Testing",
  //   priority: 25,
  // }),

  // Backend Basics
  createSkill({
    id: 24,
    key: "NodeJS",
    category: "Backend Basics",
    priority: 26,
  }),
  // createSkill({
  //   id: 25,
  //   key: "Express",
  //   category: "Backend Basics",
  //   priority: 27,
  // }),
  // createSkill({
  //   id: 26,
  //   key: "Prisma",
  //   category: "Backend Basics",
  //   priority: 28,
  // }),
  // createSkill({
  //   id: 27,
  //   key: "PostgreSQL",
  //   category: "Backend Basics",
  //   priority: 29,
  // }),
  // createSkill({
  //   id: 28,
  //   key: "Auth",
  //   category: "Backend Basics",
  //   priority: 30,
  // }),

  // Tools
  createSkill({
    id: 29,
    key: "Git",
    category: "Tools",
    priority: 9,
  }),
  createSkill({
    id: 30,
    key: "GitHub",
    category: "Tools",
    priority: 6,
  }),
  // createSkill({
  //   id: 31,
  //   key: "Docker",
  //   category: "Tools",
  //   priority: 31,
  // }),
  createSkill({
    id: 32,
    key: "VS Code",
    category: "Tools",
    priority: 32,
  }),
  createSkill({
    id: 33,
    key: "cursor",
    category: "Tools",
    priority: 10,
  }),
];

// Optional helpers
export const skillColors = skills.reduce((acc, skill) => {
  acc[skill.name] = skill.color;
  return acc;
}, {});

export const skillCategories = [
  "Frontend Core",
  "Styling & UI",
  "State, Data & Forms",
  "Testing",
  "Backend Basics",
  "Tools",
];

export const skillsByCategory = skillCategories.reduce((acc, category) => {
  acc[category] = skills.filter((skill) => skill.category === category);
  return acc;
}, {});
