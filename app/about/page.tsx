'use client';

import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<section className={styles.container}>
				<div className={styles.left}>
					<h1>About Me</h1>
					<p>
						Beginning my educational journey at Eastern Railway Higher Secondary School in Asansol, West Bengal, I pursued
						the Science stream, laying the groundwork for my future endeavors. Transitioning to higher
						education, I enrolled at Asansol Engineering College to pursue a Bachelor&rsquo;s degree in Computer Science and 
						Engineering.
						<br />
						<br />
						During my time at Asansol Engineering College, I embarked on a journey into the world of technology. In my
						first year, I started exploring full stack development. As I progressed into my sophomore year,
						I ventured into creating complex applications using React, alongside Nodejs and Flask for
						backend development. Throughout the remainder of my college years, I continued to expand my
						skill set, delving into technologies such as Devops, and more.
						<br />
						<br />
						I'm currently contributing to <strong>open source</strong> projects alongside building my own projects!
					</p>
				</div>
				<div className={styles.right}>
					<div className={`${styles.school} school`}>
						<div className={`${styles.schoolHero} schoolHero p-2`}>
							<h1 className="text-3xl text-white font-bold">Eastern Railway Higher Secondary School</h1>
							<p className="text-lg text-white font-medium">Asansol, India</p>
						</div>
						<Image
							src="/assets/images/school.jpg"
							alt="school"
							width={0}
							height={0}
							sizes="100vw"
							style={{ objectFit: 'cover', height: '100%', width: '100%' }}
						/>
					</div>
					<div className={`${styles.college} college`}>
						<Image
							src="/assets/images/college.png"
							alt="college"
							width={0}
							height={0}
							sizes="100vw"
							style={{ height: '100%', width: '100%' }}
						/>
						<div className={`${styles.collegeHero} collegeHero p-2`}>
							<h1 className="text-3xl text-white font-bold">Asansol Engineering College</h1>
							<p className="text-lg text-white font-medium">Asansol, India</p>
						</div>
					</div>
					<svg width="323" height="511" viewBox="0 0 323 511" fill="none" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<clipPath id="frame">
								<path d="M320.4 0.500156L0.599844 0.999844C0.544676 0.99993 0.5 1.04469 0.5 1.09985V508.4C0.5 508.455 0.544774 508.5 0.600002 508.5H320.4C320.455 508.5 320.5 508.455 320.5 508.4V0.600156C320.5 0.544867 320.455 0.50007 320.4 0.500156Z" />
							</clipPath>
							<clipPath id="school">
								<path d="M1 509.654V1.1C1 1.04477 1.04478 1 1.10001 1H321.819C321.897 1 321.945 1.08674 321.903 1.15333L1.18458 509.707C1.1311 509.792 1 509.754 1 509.654Z" />
							</clipPath>
							<clipPath id="college">
								<path d="M322 509.401V1.34603C322 1.24578 321.869 1.20788 321.815 1.29268L1.09688 509.846C1.05485 509.913 1.10282 510 1.18161 510L321.9 509.501C321.955 509.501 322 509.456 322 509.401Z" />
							</clipPath>
						</defs>
						<path d="M1 509.654V1.1C1 1.04477 1.04478 1 1.10001 1H321.819C321.897 1 321.945 1.08674 321.903 1.15333L1.18458 509.707C1.1311 509.792 1 509.754 1 509.654Z" />
						<path d="M322 509.401V1.34603C322 1.24578 321.869 1.20788 321.815 1.29268L1.09688 509.846C1.05485 509.913 1.10282 510 1.18161 510L321.9 509.501C321.955 509.501 322 509.456 322 509.401Z" />
					</svg>
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default About;
