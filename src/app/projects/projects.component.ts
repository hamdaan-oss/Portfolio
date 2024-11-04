import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "Portfolio",
      description: "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, and more.",
      image: "assets/img/portfolio.webp",
      github: "https://github.com/hamdaan-oss/Portfolio",
      view: "https://mohd-hamdaan-ansari-portfolio.netlify.app/",
      status: true,
      date: "November - 2024",
      demo: true,
      tech: [
        {
          name: "Reactjs",
          image: "assets/img/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "figma",
          image: "assets/img/figma.svg",
        },
      ]
    },
    {
      name: "Gozelia",
      description: "Gozelia is a modern, responsive e-commerce platform using the MERN stack, delivering a seamless shopping experience with curated products and secure payments.",
      image: "assets/img/netflix-cole.webp",
      github: "https://github.com/hamdaan-oss/Gozelia",
      view: "https://gozelia.netlify.app/",
      status: true,
      date: "2024",
      demo: true,
      tech: [
        {
          name: "Reactjs",
          image: "assets/img/ReactJs.svg",
        },
        {
          name: "Nodejs",
          image: "assets/img/nodejs.svg",
        },
        {
          name: "Mongodb",
          image: "assets/img/MongoDb.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
      ]
    },

    {
      name: "Gozelia Admin Panel",
      description: "Gozelia Admin Panel: A streamlined MERN-based dashboard for efficient product management, order tracking, coupon management, and real-time insights.",
      image: "assets/img/swiftrevel.webp",
      github: "https://github.com/hamdaan-oss/Gozelia-Admin-Pannel",
      view: "https://adminofgozelia.netlify.app/",
      status: true,
      date: "2024",
      demo: true,
      tech: [
        {
          name: "Reactjs",
          image: "assets/img/ReactJs.svg",
        },
        {
          name: "Nodejs",
          image: "assets/img/nodejs.svg",
        },
        {
          name: "Mongodb",
          image: "assets/img/MongoDb.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
      ]
    },

    {
      name: "Currency Calculator",
      description: "A Netflix clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
      image: "assets/img/hinez.webp",
      github: "https://github.com/hamdaan-oss/Currency-Converter",
      view: "https://hamdaan-oss.github.io/Currency-Converter/",
      status: true,
      date: "2024",
      demo: true,
      tech: [
        
        {
          name: "css",
          image: "assets/img/css3.svg",
        },
        {
          name: "javascript",
          image: "assets/img/js.svg",
        },
        {
          name: "html",
          image: "assets/img/html5.svg",
        },
        {
          name: "api",
          image: "assets/img/api.svg",
        },
      ]
    },

    {
      name: "Tic-Tac-Toe Game",
      description: "Classic Tic Tac Toe game using HTML, CSS, and JavaScript. Sleek interface, smooth gameplay, and dynamic win detection. Great for practicing JavaScript basics!",
      image: "assets/img/Tictactoe.jpg",
      github: "https://github.com/hamdaan-oss/Tik-Tac-Toe",
      view: "https://hamdaan-oss.github.io/Tik-Tac-Toe/",
      status: true,
      date: "augest - 2024",
      demo: true,
      tech: [
        {
          name: "HTML5",
          image: "assets/img/html5.svg",
        },
        {
          name: "css",
          image: "assets/img/css3.svg",
        },
        {
          name: "js",
          image: "assets/img/js.svg",
        },
        
      ]
    },
    {
      name: "Rock Paper Scissors",
      description: "A Rock Paper Scissors game against the computer, built with HTML, CSS, and JavaScript. Simple, responsive, and fun!",
      image: "assets/img/rockpapersci.jpg",
      github: "https://github.com/hamdaan-oss/Rock-Paper-Scissors",
      view: "https://hamdaan-oss.github.io/Rock-Paper-Scissors/",
      status: true,
      date: "2024",
      demo: true,
      tech: [
        {
          name: "HTML5",
          image: "assets/img/html5.svg",
        },
        {
          name: "css",
          image: "assets/img/css3.svg",
        },
        {
          name: "js",
          image: "assets/img/js.svg",
        },
        
      ]
    },
    
  ]
}
