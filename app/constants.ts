import { link } from "fs";

export const NavbarUrls = {
	ABOUT: { name: 'About', url: '/about' },
	EXPERIENCES: { name: 'Experiences', url: '/experiences' },
	SKILLS: { name: 'Skills', url: '/skills' },
	PORTFOLIO: { name: 'Project', url: '/portfolio' },
	CONTACT: { name: 'Contact', url: '/contact' },
};

export const MyExperiences = [
	{
		title: 'Tech Particle',
		subTitle: 'React Developer',
		date: 'April 2021 - June 2021',
	},
	{
		title: 'K Plus Classes',
		subTitle: 'Full Stack Developer',
		date: 'Dec 2021 - March 2022',
	},
	{
		title: 'Triunits',
		subTitle: 'Android Developer',
		date: 'Jan 2022 - May 2022',
	},
	{
		title: 'Tricket',
		subTitle: 'Flutter Developer',
		date: 'April 2022 - May 2022',
	},
	{
		title: 'Capricon Technology',
		subTitle: 'Cross Platform App Developer',
		date: 'May 2022 - Present',
	},
	{
		title: 'Reliance Industries Limited',
		subTitle: 'Summer Intern',
		date: 'May 2023 - July 2023',
	},
	{
		title: 'Google Summer of Code',
		subTitle: 'Open Source Contributor',
		date: 'May 2023 - Oct 2023',
	},
	{
		title: 'Cuemath',
		subTitle: 'Game Developer',
		date: 'Oct 2023 - Present',
	},
];

export const MySkills = [
	{
		title: 'Languages',
		children: [
			['C', 'C++', 'Java', 'Javascript', 'Typescript', 'Python'],
			['SQL' ,'HTML', 'CSS', 'SCSS'],
		],
		textColor: '--secondary-color',
		backgroundColor: '--primary-color',
	},
	{
		title: 'Frameworks & Libraries',
		children: [
			['React JS', 'Next JS', 'Jest'],
			['Recoil', 'Redux'],
			['Flask', 'Express JS'],
			['Material UI', 'Bootstrap', 'Tailwind', ],
			['Aceternity UI', 'Shadcn UI']
		],
		textColor: '--primary-color',
		backgroundColor: '--light-grey',
	},
	{
		title: 'DevOps & Version Control',
		children: [
			['Linux', 'Docker', 'Kubernetes','AWS EC2', 'AWS S3', 'AWS ECS'],
			['Git', 'Github'],
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
