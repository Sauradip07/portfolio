import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import { MyContacts } from '@/constants';
import styles from './contact.module.css';
import Image from 'next/image';
import AnimatedCursor from 'react-animated-cursor';

const ContactMe = () => {
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
			<div className={styles.container}>
				<h1>Contact Me</h1>
				<p>
					Feel free to reach out for inquiries or to simply start a conversation. I&apos;m eager to connect
					and collaborate with you. Let&apos;s get in touch!
				</p>
				<section className={styles.contactMe}>
					<div className={styles.left}>
						{MyContacts.map(({ asset, title, content,link }, index) => (
							<div key={index} className={styles.cardItem}>
								{link === '#' ? (
									<div>
										<div className={styles.icon}>
											<Image src={asset} alt={title} width={40} height={40} />
										</div>
										<div className={styles.content}>
											<h2>{title}</h2>
											<p>{content}</p>
										</div>
									</div>
									) : (
									<a href={link} target="_blank">
										<div className={styles.icon}>
											<Image src={asset} alt={title} width={40} height={40} />
										</div>
										<div className={styles.content}>
											<h2>{title}</h2>
											<p>{content}</p>
										</div>
									</a>
								)}
							</div>
						))}
					</div>
					<div className={styles.right}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="Enter your email" />
						<label htmlFor="message">Message</label>
						<textarea id="message" placeholder="Enter your message"></textarea>
						<button>Send Message</button>
					</div>
				</section>
				<div className={styles.footer}>
					<Image
						src="/assets/icons/contact/copyright.svg"
						className="mr-4"
						alt="Copyright"
						width={20}
						height={20}
					/>
					<span>Sauradip Ghosh 2024</span>
				</div>
			</div>
		</ScreenWrapper>
		</>
	);
};

export default ContactMe;
