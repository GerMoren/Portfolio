import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "German Moren",
  title: "Hi all, I'm German",
  subTitle: emoji(
    `As a Sr Full Stack Web Developer, my working principle is learning by doing.
    I am a passionate software developer 🚀 experienced in building web applications with React, Next.js, Node.js, and Nest.js,
    using TypeScript as my primary language. I also have experience in PHP and object-oriented programming.
    With the majority of my web development projects built using these technologies and frameworks,
    I am always eager to learn and apply new skills to my work.
    Additionally, I have knowledge in cloud technologies such as Google Cloud and AWS.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YiAAhujtlPRaZjKDKE5ckwv3j3yM0Hxr/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/GerMoren",
  linkedin: "https://www.linkedin.com/in/germanmoren/?locale=en_US",
  gmail: "morengerman91@gmail.com",
  twitter: "https://www.twitter.com/moren_dev",
  whatsapp: "https://api.whatsapp.com/send/?phone=%2B5493442670833",
  instagram: "https://www.instagram.com/germoren_/",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  // subTitle: "Sr full stack developer",
  skills: [
    emoji("⚡ Progressive Web Applications (PWA) development in both traditional and single-page application (SPA) stacks"),
    emoji(
      "⚡  Integration of third-party services such as Firebase, AWS, and Google Cloud Platform (GCP)"
    ),
    emoji(
      "⚡ Web scraping services for data acquisition and analysis"
    ),
    emoji(
      "⚡  High-performance API development for optimal user experience"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "dynamoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "AWS Rocket Journey",
      logo: require("./assets/images/descarga.jfif"),
      subHeader: "Solution Architect",
      duration: "February 2023 - Present",
      descBullets: [
        "Learn the best practices and advanced concepts of AWS architecture",
        "Master how to design and deploy scalable, highly available, and fault-tolerant systems on AWS",
      ],
    },
    {
      schoolName: "Henry",
      logo: require("./assets/images/SoyHenry.jpg"),
      subHeader: "Full Stack Web Developer",
      duration: "June 2020 - October 2020",
      descBullets: [
        `HTML5 | CSS3 | JavaScript | Git | Basic Testing`,
        `Data Structures, algorithms, Big O, Functional VS OOP.`,
        `AJAX | Webpack | ReactJS | Redux | React-Redux`,
        `NodeJs | Web servers (Express) | TypeScript`,
        `SQL | Postgres | MySQL | Authentication`,
      ],
    },
    {
      schoolName: "Universidad Tecnologica Nacional",
      logo: require("./assets/images/UTN.jpg"),
      subHeader: "Civil Engineer",
      duration: "April 2008 - May 2019",
      desc: `Participation in project "Say Next" (device to turn pages).
        Winner of the Virtual Headquarters of the 3rd edition: LATIN AMERICAN INNOVATION RALLY`,
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Typescript", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend with nodeJS",
      progressPercentage: "90%",
    },
    {
      Stack: "ReactJS",
      progressPercentage: "70%",
    },
  ],
};

// Your top 3 work experiences
const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Tiendamia",
      companylogo: require("./assets/images/unnamed.png"),
      date: "July 2021 – Present",
      desc: `As a Sr Fullstack Developer at Tiendamia, my main responsibility is to keep the product catalog updated
       and constantly expanding. To achieve this, I am in charge of migrating the API from a Magento1 monolith to Node.js
       microservices, using cutting-edge technologies such as DynamoDB, ElasticSearch for advanced searches, and web scraping
       data from sites like Amazon, Walmart, and Ebay to obtain up-to-date and accurate information on products.`,
      descBullets: [
        "I lead the backoffice team developed in React.",
        "I developed and implemented the category tree for products on the platform.",
        "I automatically categorized millions of products using Node.js with TypeScript and the Sequelize ORM.",
        `I monitor the entire application on Cloudwatch, Datadog, and ElasticSearch,
         and use Amazon services such as Athena and S3 to store static files and perform advanced searches.`,
      ],
    },
    {
      role: "Back-End Developer",
      company: "Chiper S.A.",
      companylogo: require("./assets/images/newLogoChiper.svg"),
      date: "October 2020 – June 2021",
      desc: `As a Jr. Node.js Developer, I was responsible for managing the flow of data between the server and the users.
       My main focus was on developing server-side logic, defining and maintaining different microservices,
       and ensuring high performance and responsiveness to front-end requests. Additionally,
       I collaborated with my co-workers to integrate front-end elements into the application.`,
      descBullets: [
        "Integrated user-facing elements developed by front-end developers with server-side logic.",
        "Wrote reusable, testable, and efficient code.",
        "Designed and implemented low-latency, high-availability, and performant applications.",
        "Implemented security and data protection measures.",
        "Integrated data storage solutions.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "GerMoren", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url: "https://dev.to/germoren/bubblesort-en-typescript-30l4",
      title: "BubbleSort en Typescript",
      description: `This article discusses Bubble Sort in TypeScript. It explains the basic concepts, provides a step-by-step implementation,
      and discusses the pros and cons. It is a useful resource for improving skills in TypeScript and sorting algorithms.`,
    },
  ],
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+5493442670833",
  email_address: "morengerman91@gmail.com",
};

const twitterDetails = {
  userName: "MorenGer_",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
