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
    carrent,
    jobit,
    tripguide,
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
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name:"Material UI",
      icon:materialui
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Framer Motion",
      icon: framermotion,
    },
    {
      name: "git",
      icon: git,
    },


  ];
  
  const experiences = [

    
    {
      title: "Javascript",
      company_name: "Currency Converter App",
      icon: currency,
      iconBg: "#383E56",
      date: "December 2023 - Feb 2024",
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
      date: "Feb 2024 - June 2024",
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
      name: "3D portfolio",
      description:
        "A portfolio website that showcase my projects and skills through 3D animations. The website is fully responsive and works on any device. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threeJs",
          color: "green-text-gradient",
        },
        {
          name: "framerMotion",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
   
    {
      name: "Fitness for Engineers",
      description:
        "A web application that allows users to create and track their fitness goals with limited time. The app is designed to be user-friendly and easy to use. ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {  technologies, experiences, projects };