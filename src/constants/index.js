import {
  icon_one,
  icon_two,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  swiper,
  webpack,
  git,
  figma,
  vite,
  sushi,
  bottle,
  fitness,
  threejs,
  icon_three,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Communicative Person",
    icon: icon_one,
  },
  {
    title: "Responsible Employee",
    icon: icon_three,
  },
  {
    title: "Nice Guy",
    icon: icon_two,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Swiper JS",
    icon: swiper,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vite",
    icon: vite,
  },
];

const experiences = [
  {
    title: "HTML",
    name: "HTML",
    icon: html,
    iconBg: "#383E56",
    date: "HTML",
    points: [
      "Semantic HTML.",
      "Forms and Validations.",
      "SEO basics.",
      "Multimedia tags.",
      "HTML Accessibility",
    ],
  },
  {
    title: "CSS",
    name: "CSS",
    icon: css,
    iconBg: "#E6DEDD",
    date: "CSS",
    points: [
      "Responsive design and Media Queries.",
      "Layouts.",
      "BEM architecture.",
      "CSS Modules.",
      "Sass (Scss)",
      "Post CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "JavaScript",
    name: "JavaScript",
    icon: javascript,
    iconBg: "#383E56",
    date: "JavaScript",
    points: [
      "Syntax and Basic Constructs.",
      "DOM Manipulation.",
      "Promises, async/await.",
      "Fetch API / Ajax (XHR).",
      "ES6+ and modular JS",
      "TypeScript",
      "Swiper JS",
      "Three.js",
      "Webpack, GULP, Vite, Esbuild",
    ],
  },
  {
    title: "React",
    name: "React",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "React",
    points: [
      "Functional Components, Class Components.",
      "JSX.",
      "React Router.",
      "Hooks, Custom hooks.",
      "Rendering",
      "Redux Toolkit",
      "React + TypeScript",
      "Axios",
      "Framer Motion",
      "Code-Splitting",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kirill proved me wrong.",
    name: "Tim Cook",
    designation: "CEO",
    company: "Apple",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2021/12/Tim-Cook-Ted-Lasso-Premiere-GettyImages-1328978329-H-2021.jpg?w=1296",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kirill does.",
    name: "Mark Zuckerberg",
    designation: "CEO",
    company: "Meta",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2018-07/25/full/1532525428-0063.jpg",
  },
  {
    testimonial:
      "This is Elon Musk! This is Elon Musk! This is Elon Musk! This is Elon Musk! This is Elon Musk! This is Elon Musk!",
    name: "Elon Musk",
    designation: "CEO",
    company: "SpaceX",
    image:
      "https://www.thestreet.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyNDk0NTEyNTIwNTcwMTY5/elon-musk-3-lead-js-092122.jpg",
  },
];

const projects = [
  {
    name: "Sushi Shop",
    description:
      "Web application that allows users to search, sort, and add to cart sushi. Implemented pagination, saving the cart to local storage and lazy loading.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: sushi,
    source_code_link: "https://github.com/bigboykirusha/react-shop",
  },
  {
    name: "Github Bottle",
    description:
      "Web application that allows users to see the best Github repositories sorted by programming languages and compare their Github profile with those of other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bottle,
    source_code_link: "https://github.com/bigboykirusha/github-bottle",
  },
  {
    name: "Fitness App ",
    description:
      "A simple landing page for fitness clubs, with a beautiful design, stylish animation, smooth scroll, photo galleries,  adapted for mobile devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/bigboykirusha/react-fitness-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
