export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 6,
        name: 'Testimonials',
        href: '#testimonials',
    },
    {
        id: 7,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Vrinda Goyal',
        position: 'SDE 3 @ Walmart',
        img: 'assets/review1.png',
        review:
            'He\'s a hardworking individual with a strong passion for technology and extensive experience in building projects with Spring Boot. His enthusiasm for problem-solving and competitive programming highlights his ability to tackle challenges with creativity and precision. I\'m confident in his potential to excel in any endeavor he pursues.',
    },
    {
        id: 2,
        name: 'Ajit Gupta',
        position: 'SDE 1 @ HingeHealth',
        img: 'assets/review2.png',
        review:
            'I worked with Vyom on a project, and he proved to be a great team player. His problem-solving skills, developed through ICPC and competitive programming, were key in tackling complex challenges. He\'s dedicated, collaborative, and consistently delivers high-quality work.',
    }
];

export const myProjects = [
    {
        title: 'Streamify - Video Streaming Application',
        desc: 'A cutting-edge Video Streaming Application that ensures seamless video playback through efficient backend engineering and real-time processing.',
        subdesc: 'Built using Spring Boot and FFmpeg, the platform features an advanced video pipeline that converts uploaded videos into HLS format, delivering adaptive bitrate streaming and compatibility across diverse devices and network conditions.',
        href: 'https://github.com/Vyom-26/Video-Streaming-Application',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'SpringBoot',
                path: '/assets/icons8-spring-boot.svg',
            },
            {
                id: 4,
                name: 'MySQL',
                path: '/assets/mysql-icon.svg',
            },
        ],
    },
    {
        title: 'IDM - Internet Download Manager',
        desc: 'A high-performance Internet Download Manager developed in Java, designed to improve download speeds and provide a seamless user experience with multithreading support.',
        subdesc: 'Built with Java, JavaFX, and SceneBuilder, this manager supports up to 10 simultaneous downloads, boosting download speed by 50%. Real-time progress tracking and robust error handling ensure reliable file retrieval, even in unstable network conditions.',
        href: 'https://github.com/Vyom-26/Internet-Download-Manager',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/file-java-color-green-icon.svg',
            },
            {
                id: 2,
                name: 'JSP',
                path: 'assets/file-jsp-color-green-icon.svg',
            },
        ],
    },
    {
        title: 'Mini Operating System',
        desc: 'A mini operating system simulation built to enhance resource management, featuring key components like a Simple Scheduler, Simple Shell, and Smart Loader.',
        subdesc: 'Developed in C, the system includes a priority-based Simple Scheduler for efficient CPU allocation, a Simple Shell that supports up to 10 concurrent processes, and a Smart Loader that optimizes memory usage, reducing it by 25%.',
        href: 'https://github.com/Vyom-26/Mini-Operating-System',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: '/assets/icons8-c++.svg',
            },
            {
                id: 2,
                name: 'C',
                path: 'assets/icons8-c-programming.svg',
            },
        ],
    },
    {
        title: 'Huffman Tree Visualizer',
        desc: 'Created an interactive Huffman Tree visualizer using D3.js, allowing users to input strings and view step-by-step tree construction with real-time graphics.',
        subdesc: 'Executed a Huffman encoding algorithm with O(n² log n) complexity, achieving a 46.64% compression rate for a 3,200-word sample, and visualizing the encoded bit length in real time.',
        href: 'https://github.com/Vyom-26/Huffman-Tree-Visualizer',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html-icon.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css-icon.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript-programming-language-icon.svg',
            },
            {
                id: 4,
                name: 'D3JS',
                path: '/assets/d3-js-icon.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Samsung Prism',
        pos: 'Research Intern',
        duration: 'February 2025 - May 2025',
        title: "Upcoming internship!!! Yayyy",
        icon: '/assets/samsungPrism.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'GirlScript Summer of Code',
        pos: 'Open Source Contributor',
        duration: 'May 2023 - August 2023',
        title: "Contributed to various NGOs, including PetMe, during the Girlscript Summer of Code (GSSoC) by enhancing their frontend services. My work focused on improving user experience and optimizing UI components, making their digital platforms more accessible and efficient.",
        icon: '/assets/girlscriptsoc_logo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'LegalNiti',
        pos: 'Frontend Developer Intern',
        duration: 'May 2023 - July 2023',
        title: "Built the initial versions of LegalNiti’s website using React.js, Figma, and Canva, delivering a user-friendly interface for multiple web projects within the startup.",
        icon: '/assets/legalNiti.png',
        animation: 'salute',
    },
];