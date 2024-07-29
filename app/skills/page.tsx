'use client';

import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import Image from 'next/image';
import styles from './skills.module.css';
import { MySkills } from '@/constants';
import AnimatedCursor from 'react-animated-cursor';

const Skills = () => {
	return (
		<>
		<AnimatedCursor
			innerSize={8}
			outerSize={35}
			innerScale={1}
			outerScale={2}
			outerAlpha={0}
			innerStyle={{
				backgroundColor: 'rgb(0, 0, 0)',
			}}
			outerStyle={{
				border: '3px solid rgb(0, 0, 0)',
			}}
		/>
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<section className={styles.container}>
				<div className={styles.left}>
					<h1>My Skills</h1>
					<p className='max-w-2xl'>
						An overview of the languages, frameworks, and tools I leverage to bring projects to life and
						solve real-world challenges.
					</p>
					{MySkills.map((skill, index) => (
						<div key={index} className={styles.skillContainer}>
							<h2>{skill.title}</h2>
							<div className={styles.skills}>
								{skill.children.map((child, index) => (
									<div key={index} className={styles.skillSet}>
										{child.map((item, index) => (
											<span
												key={index}
												className={styles.skillItem}
												style={{
													backgroundColor: `var(${skill.backgroundColor})`,
													color: `var(${skill.textColor})`,
													borderColor: `var(${skill.borderColor})`,
												}}
											>
												{item}
											</span>
										))}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				{/* <div className={styles.right}>
					<div className={styles.placeHolder}></div>
				</div> */}
			</section>
		</ScreenWrapper>
		</>
	);
};

export default Skills;
