import {
    backend,
    creator,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    currency,
    weather,
    amazon,
    rps,
    carrent,
    jobit,
    tripguide,
    enormousengineer,
    threejs,
    framermotion,
    materialui,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      link:"https://www.w3schools.com/html/"
    },
    {
      name: "CSS 3",
      icon: css,
      link : "https://www.w3schools.com/css/",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      link:"https://tailwindcss.com/",
    },
    {
      name: "JavaScript",
      icon: javascript,
      link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },

    {
      name: "React JS",
      icon: reactjs,
      link:"https://reactjs.org/",
    },
    {
      name:"Material UI",
      icon:materialui,
      link:"https://mui.com/",
    },
    {
      name: "Three JS",
      icon: threejs,
      link:"https://threejs.org/",
    },
    {
      name: "Framer Motion",
      icon: framermotion,
      link:"https://www.framer.com/motion/",
    },
    {
      name: "Git",
      icon: git,
      link:"https://git-scm.com/",
    },


  ];
  
  const experiences = [

    {
      title: "HTML & CSS",
      company_name: "Amazon Clone",
      icon: amazon,
      iconBg: "#383E56",

      link:"https://amazonclone-lime-eight.vercel.app/",
      points: [
        "Got to know the basics to create a website using HTML and CSS",
        "Created a responsive website using HTML and CSS",
        "Created amazon website clone website using HTML and CSS",

      ],
    },
    {
      title: "Javascript",
      company_name: "Rock Paper Scissors Game",
      icon: rps,
      iconBg: "#383E56",

      link:"https://rps-game-virid.vercel.app/",
      points: [
        "Learnt how to write code in javascript",
        "Got to learn about DOM manipulation and event handling",
        "Created a rock paper scissor game using javascript",
      ],
    },
    {
      title: "API & Javascript",
      company_name: "Currency Converter App",
      icon: currency,
      iconBg: "#383E56",

      link:"https://project-currency-convertor.vercel.app/",
      points: [
        "First time got the feel to how websites actually work",
        "Also got learn about APIs which helps with providing live data to the website",
        "Was a great way to understand various concepts in javascript",
        "Created a currency converter app using javascript and APIs",
      ],
    },
    {
      title: "React",
      company_name: "Weather App",
      icon: weather,
      iconBg: "#383E56",

      link:"https://weatherproject-nine.vercel.app/",
      points: [
        "Learnt how is react better in comparison to Javascript and how is user-frinedly",
        "Learnt the role of components and how makes it easier to maintain and develop applications",
        "Created a weather app using react and Material UI",
        "Was a great way to understand various concepts in react",
      ],
    },

  ];

  const projects = [
    {
      name: "Pokédex",
      description:
        "A digital encyclopedia that provides detailed information about various Pokémon species, including their abilities, types, and evolutions. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Restful-api",
          color: "green-text-gradient",
        },
      ],
      image: enormousengineer,
      web_link:"https://pokedex-ritvik.vercel.app/",
      source_code_link: "https://github.com/rriitvik/pokedex",
    },
    {
      name: "Expense Tracker",
      description:
        "A tool to record, categorize, and analyze personal or business expenses, helping users manage and track their spending effectively. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "context-api",
          color: "green-text-gradient",
        }
      ],
      image: enormousengineer,
      web_link:"https://expensetracker-ritvik.vercel.app/",
      source_code_link: "https://github.com/rriitvik/expensetracker",
    },
    {
      name: "EnormousEngineers",
      description:
        "A web application that allows engineers to create and track their fitness goals with limited time. The app is designed to be user-friendly and easy to use. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: enormousengineer,
      web_link:"https://enormous-engineers.vercel.app",
      source_code_link: "https://github.com/rriitvik/enormous-engineers",
    }
  ];
  
  export {  technologies, experiences, projects };