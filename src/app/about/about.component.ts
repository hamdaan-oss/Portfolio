import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutme: string = ` Detail-oriented Full-Stack Web Developer with expertise in designing and building responsive web applications using HTML, CSS, JavaScript, and Node.js, particularly within the MERN stack (MongoDB, Express.js, React, Node.js). Proven ability to collaborate effectively with cross-functional teams to translate business requirements into technical solutions. Possesses a strong foundation in digital marketing, SEO strategies, and content management, enabling the delivery of optimized web experiences that drive engagement and growth.`;

  work: Array<any> = [
    {
      company: "Gozelia",
      position: "Full Stack Devloper",
      time_period: "March 2024",
      place: "Lucknow India",
      projects: [
        {
          name: "MyHinez",
          link: '#',
        },
        {
          name: "Starling Fintech",
          link: '#',
        },
        {
          name: "Swiftrevel",
          link: '#',
        },
      ],
      tech: [
        {
          name: "ReactJs",
          link: 'https://laravel.com/',
        },
        {
          name: "NodeJs",
          link: 'https://nodejs.org/en',
        },
        {
          name: "MongoDb",
          link: 'https://www.mongodb.com/',
        },
        {
          name: "tailwind",
          link: 'https://tailwindcss.com/',
        },
        {
          name: "JavaScript",
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
        name: "Github",
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      ]
    },
    {
      company: "Diraaz",
      position: "Shopify Devloper",
      time_period: "March 2023 - 2024",
      place: "Lucknow India",
      projects: [
        {
          name: "Farmers Copper",
          link: '#',
        },
      ],
      tech: [
        
        {
          name: "HTML",
          link: 'https://tailwindcss.com/',
        },
        {
          name: "CSS",
          link: 'https://tailwindcss.com/',
        },
        {
          name: "Seo And Sem",
          
        },
      ]
    }]

  education: Array<any> = [
    {
      studied_at: "Himalyan University",
      qualified: "Bachelor of Computer Applications",
      time_period: "2025 - Present",
    },
    {
      studied_at: "Integral University",
      qualified: "B.A",
      time_period: "2021 - 2024",
      place: "Lucknow",
    },
  ]
}
