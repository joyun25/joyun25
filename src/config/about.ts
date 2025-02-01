import { AboutPageType } from "@/types";

const aboutPageConfig: AboutPageType = {
  title: "Who am I?",
  description:
    "Oh Hello there, I'm a front-end developer with a passion for creating intuitive and responsive web experiences. I specialize in React.js, Redux, MUI, and d3.js, crafting seamless UIs that enhance usability. With experience in networking solutions and IoT projects, I thrive on solving complex challenges and building products that bridge technology and user needs.",
  profileImageUrl: "/images/pages/about/about-01.jpg",
  profileImageDescription: "Profile image",
  profileImageCaption: "And this is what I look like.",
  date: "2025-02-01",
  content: [
    {
      idx: 0,
      title: "What do I do?",
      description:
        "I focus on developing and optimizing web interfaces, ensuring functionality, performance, and design come together smoothly. I’ve worked closely with UI/UX designers, firmware engineers, and product teams to deliver efficient, user-centered solutions. My expertise includes state management, data visualization, and RWD, making products more accessible and engaging.",
    },
    {
      idx: 1,
      title: "What are my hobbies?",
      description:
        "Beyond coding, I’m passionate about art, culture, and technology. I enjoy exploring museums, discovering local exhibitions, and staying updated on the latest in front-end development. These interests inspire my side project—an app integrating cultural event recommendations to connect people with meaningful experiences.",
    },
    {
      idx: 2,
      title: "Where can you find me?",
      description:
        "If you’d like to connect, feel free to reach out! You can send me an email at joyunhsiao@gmail.com for collaboration inquiries or just to chat about web development. I’m also active on LinkedIn. If you prefer a direct conversation, you can reach me at +886-912-328-804. Looking forward to connecting with you!",
    },
  ],
};

export default aboutPageConfig;
