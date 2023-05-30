import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter, FaNodeJs, FaReact, FaEnvelope, FaMobile, FaStoreAlt } from 'react-icons/fa'
import { DiMongodb } from "react-icons/di"
import { SiExpress } from "react-icons/si"
// import { FaHtml5 } from "react-icons/fa"
import { heroImg } from '../assets'

// navlinks 
export const navlinks = [
    {
        title: "Home", link: "/#home"
    },
    {
        title: "About", link: "/#about"
    },
    {
        title: "Experience", link: "#experience"
    },
    {
        title: "Portfolio", link: "#portfolio"
    },
    {
        title: "Contact", link: "#contact"
    }
]


// About Data 
export const heroData = {
    title: "I am Motahar Hossain",
    subTitle: "MERN Stack Developer",
    description: "To work in a challenging environment, which maintains high professional standards, fosters personal  growth, provides an opportunity for continuous learning and expects quality results. And to utilize my   knowledge and skills in the best possible way for the fulfillment of organizational goals.",
    heroImg: heroImg,
    heroIcons: [
        {
            position: "heroToToLeftIcon",
            icon: <DiMongodb />
        },
        {
            position: "heroToToRightIcon",
            icon: <SiExpress />
        },
        {
            position: "heroBottomToLeftIcon",
            icon: <FaReact />
        },
        {
            position: "heroBottomToRightIcon",
            icon: <FaNodeJs />
        },
    ]

}


// about data 

export const aboutData = {
    leftTitle: "About",
    rightTitlte: "My Skills",
    description: "My name is Motahar Hossain , I am Mern Stack Developer from Dhaka, Bangladesh. I have rich experience in web site design and building and customization, also I am good at Mern Stack .",
    // cvLink: "https://drive.google.com/file/d/15G7CrUyBJDSLMbv6wBe88mbKUPGRTyG4/view",
    cvLink: "",
    skills: [
        {
            catagory: "Programming  Language",
            tags: ["C", "C#", "Python", "Java", "Javascript"]
        },
        {
            catagory: "Web Design & Frontend   ",
            tags: ["Html", "Css", "Bootstrap", "React Bootstrap", "Javascript", "Material UI", "Tailwind CSS ", "React Js", " Next Js", "React Redux", "Jquery", "Firebase", "Jwt"]
        },

        {
            catagory: "Backend  ",
            tags: ["Node Js", "Express Js", "Mongoose", "MongoDb", "MySql", "Microsoft Sql"
            ]
        }
    ]

}


// social Links and icons

export const socialLinks = [
    {
        icon: <FaFacebook />, link: "#"
    },
    {
        icon: <FaLinkedin />, link: "#"
    },
    {
        icon: <FaPinterest />, link: "#"
    },
    {
        icon: <FaTwitter />, link: "#"
    },
]

export const footerText = [
    {
        text: "Copyright & copy; 2023 Motahar Hossain Portfolio",
        link: "#"
    }
]

export const experienceData = {
    title: "Experience",
    experienceItems: [
        {
            title: "Web  Designer",
            description: "I have been working as a web designer since 2019 in various marketplaces. Besides, I have worked a lot as a web designer in various companies."
        },
        {
            title: "Web  Developer",
            description: "I have been working as a web developer for the past 2 years. Having done various big projects in the freelancer marketplace which gave me a lot of experience in web development"
        },
    ]
}


export const projectsData = {
    title: "My Projects ",
    portfolioData: [
        {
            id: 1,
            projectName: 'Doctors portal',
            tags: ["React", "Mongodb", "JWT", "Node js", "Sass", "Redux toolkit", "Express js ", "cloudinary"," Strip", "React-router-dom"],
            code: 'https://github.com/amotahar/doctors-portal-client',
            demo: 'https://doctors-portal-5c4fe.web.app/',
            image: "https://res.cloudinary.com/dnr14t7ka/image/upload/v1676099361/all-devices-black_wvbz6r.png"
        },
        {
            id: 2,
            projectName: 'Doctors portal',
            tags: ["React", "Mongodb", "JWT", "Node js", "Sass", "Redux toolkit", "Express js ", "cloudinary"," Strip", "React-router-dom"],
            code: 'https://github.com/amotahar/doctors-portal-client',
            demo: 'https://doctors-portal-5c4fe.web.app/',
            image: "https://i.ibb.co/W6g39w3/image.png"
        },
        {
            id: 3,
            projectName: 'Doctors portal',
            tags: ["React", "Mongodb", "JWT", "Node js", "Sass", "Redux toolkit", "Express js ", "cloudinary"," Strip", "React-router-dom"],
            code: 'https://github.com/amotahar/doctors-portal-client',
            demo: 'https://doctors-portal-5c4fe.web.app/',
            image: "https://res.cloudinary.com/dnr14t7ka/image/upload/v1676108691/portfolio_jfxxpx.png"
        },
    ]
}



export const servicesData = {
    title: "Services  ",
   
    services: [
        {
            id: 1,
            serviceName: 'MERN Stack',
            subTitle: "Frontand & Backend is done in a perfect way which is the responsibility of the user",
            icon: "https://vportfolio.amcoders.com/frontend/img/service/4.png"
        },
        
        {
            id: 1,
            serviceName: 'Web Development  ',
            subTitle: "JavaScript is projected with React js and next js which are very popular nowadays.",
            icon: "https://vportfolio.amcoders.com/frontend/img/service/1.png"
        },
        {
            id: 1,
            serviceName: 'Api integration',
            subTitle: "Api is created for the backend of the project which contains the functionality of a website.",
            icon: "https://vportfolio.amcoders.com/frontend/img/service/2.png"
        }
    ]
}



export const contactData = {
    title: "Contact Me",
    subTitle: "If you need any kind of information, you can inform me by filling the form. I will catch up with you later",
    contactInfos: [
        {
            icon: <FaEnvelope />,
            header: "Call Me ",
            subText: "01637623438"
        },
        {
            icon: <FaMobile />,
            header: "Email Us At ",
            subText: "motaharhossain.cse@gmail.com "
        },
        {
            icon: <FaStoreAlt />,
            header: "Visit Office  ",
            subText: "West Agargoan, Dhaka. "
        },
    ]
}
