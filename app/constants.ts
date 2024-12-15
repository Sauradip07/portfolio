import { link } from "fs";

export const NavbarUrls = {
	ABOUT: { name: 'About', url: '/about' },
	EXPERIENCES: { name: 'Experiences', url: '/experiences' },
	SKILLS: { name: 'Skills', url: '/skills' },
	PORTFOLIO: { name: 'Projects', url: '/portfolio' },
	CONTACT: { name: 'Contact', url: '/contact' },
};

export const MyExperiences = [
	{
		title: 'Winter Of Code',
		subTitle: 'Javascript Developer',
		date: 'March 2023 - May 2023',
	},
	{
		title: 'Paymatrix',
		subTitle: 'Full Stack Developer Intern',
		date: 'May 2024 - July 2024',
	},
	{
		title: 'LFX Mentorship 2024 @ Hyperledger Foundation',
		subTitle: 'Software Developer Intern',
		date: 'June 2024 - Present',
	},

];

export const MySkills = [
	{
		title: 'Languages',
		children: [
			['C', 'C++', 'Java', 'Javascript', 'Typescript'],
			['SQL' ,'HTML', 'CSS'],
		],
		textColor: '--secondary-color',
		backgroundColor: '--primary-color',
	},
	{
		title: 'Frameworks & Libraries',
		children: [
			['React JS', 'Next JS', 'Node JS'],
			['Recoil', 'Redux'],
			['Tailwind', 'Shadcn UI','Material UI'],
			['FastAPI', 'Express JS'],
			
		],
		textColor: '--primary-color',
		backgroundColor: '--light-grey',
	},
	{
		title: 'Tools & Technologies',
		children: [
			['Linux', 'Docker', 'Kubernetes', 'Github Actions'],
			['AWS(EC2, S3)','kafka','Redis','MongoDB','PostgreSQL'],
			['Git', 'Github', ],
		],
		textColor: '--primary-color',
		backgroundColor: '--secondary-grey',
		borderColor: '--primary-color',
	},
	{
		title: 'UI/UX Design',
		children: [['Figma', 'Canva']],
		textColor: '--secondary-color',
		backgroundColor: '--primary-color',
	},
];

export const MyPortfolio = [
	{
		name: 'Treklers Passenger App',
		content: `Treklers is a Taxi Booking App that allows users to book a cab
		and track the driver in real-time. It has several options live
		location and emergency calling.`,
		poster: '/assets/images/portfolio/commingsoon.avif',
	},
	{
		name: 'Placement Management System',
		content: `Made to keep track of the placement process, by ensuring proper
		communication between the placement coordinators and placement
		cell.`,
		poster: '/assets/images/portfolio/commingsoon.avif',
	},
	{
		name: 'UV Downloader',
		content: `UV Downloader is a video downloader app which allows users to
		download videos from various platforms like Youtube, Facebook,
		Instagram, Twitter, etc.`,
		poster: '/assets/images/portfolio/commingsoon.avif',
	},
];

export const MyContacts = [
	{
		asset: '/assets/icons/contact/email.svg',
		title: 'Email',
		content: 'sauradip96ghosh@gmail.com',
		link: '#',
	},
	{
		asset: '/assets/icons/contact/linkedin.svg',
		title: 'LinkedIn',
		content: 'sauradip-ghosh-726742222',
		link: 'https://www.linkedin.com/in/sauradip-ghosh-726742222/',
	},
	{
		asset: '/assets/icons/contact/github.svg',
		title: 'Github',
		content: 'Sauradip07 ',
		link: 'https://github.com/Sauradip07',
	},
	{
		asset: '/assets/icons/contact/location.svg',
		title: 'Location',
		content: 'Asansol, India',
		link: '#',
	},
];
