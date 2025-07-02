import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, ISourceOptions, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import TelegramIcon from '@mui/icons-material/Telegram';
import { SiDiscord } from 'react-icons/si';
import styles from './styles.module.css';
import { FaGithub } from 'react-icons/fa';

export function About() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine: Engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesOptions: ISourceOptions = useMemo(
		() => ({
			background: {
				color: '#06141d'
			},
			fullScreen: {
				enable: false,
				zIndex: 0
			},
			particles: {
				color: {
					value: '#4caf50'
				},
				move: {
					enable: true,
					speed: 1.5,
					direction: 'none',
					outModes: {
						default: 'out'
					}
				},
				number: {
					value: 60,
					density: {
						enable: true
					}
				},
				opacity: {
					value: { min: 0.3, max: 0.7 }
				},
				shape: {
					type: 'triangle'
				},
				size: {
					value: { min: 1, max: 3 }
				},
				links: {
					enable: true,
					distance: 150,
					color: '#4caf50',
					opacity: 0.4,
					width: 1
				}
			},
			detectRetina: true
		}),
		[]
	);

	return (
		<div className={styles.pageContainer}>
			{init && (
				<Particles
					id='tsparticles'
					options={particlesOptions}
					className={styles.particles}
				/>
			)}

			<motion.section
				className={styles.contentContainer}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<motion.article
					id='about'
					className={styles.aboutCard}
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<h2 className={styles.sectionTitle}>About Me</h2>
					<p className={styles.aboutText}>
						Hi there! I'm always in endless search of an opportunity to learn something
						new. Hopefully, stage 0 and incoming stages will be passed happily and with
						pleasure. Have a good luck everyone!
					</p>

					<h3 id='skills' className={styles.sectionTitle}>
						Skills
					</h3>
					<ul className={styles.skillsList}>
						<li>JabaScript</li>
					</ul>

					<h3 className={styles.sectionTitle}>Code Example</h3>
					<pre className={styles.codeBlock}>
						<code>
							{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
						</code>
					</pre>

					<h3 id='projects' className={styles.sectionTitle}>
						Projects
					</h3>
					<ul className={styles.projectsList}>
						<li>
							<a
								href='https://drpdd.github.io/rsschool-cv/'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.projectLink}
							>
								Rsschool CV
							</a>
						</li>
					</ul>

					<h3 className={styles.sectionTitle}>Education</h3>
					<ul className={styles.projectsList}>
						<li>RS School JavaScript/Front-end Course</li>
						<li>English: C1</li>
					</ul>
				</motion.article>

				<motion.section
					id='contacts'
					className={styles.contactsSection}
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<h2 className={styles.contactsTitle}>Contacts</h2>
					<ul className={styles.contactsList}>
						<li>
							<motion.a
								href='https://t.me/drpdd'
								target='_blank'
								rel='noopener noreferrer'
								className={`${styles.contactLink} ${styles.telegram}`}
								whileHover={{ y: -3 }}
								whileTap={{ scale: 0.97 }}
							>
								<TelegramIcon className={styles.contactIcon} />
								<span>@drpdd</span>
							</motion.a>
						</li>
						<li>
							<motion.a
								href='https://discord.com/users/209981487301263362'
								target='_blank'
								rel='noopener noreferrer'
								className={`${styles.contactLink} ${styles.discord}`}
								whileHover={{ y: -3 }}
								whileTap={{ scale: 0.97 }}
							>
								<SiDiscord className={styles.contactIcon} />
								<span>Discord</span>
							</motion.a>
						</li>
						<li>
							<motion.a
								href='https://github.com/drpdd'
								target='_blank'
								rel='noopener noreferrer'
								className={`${styles.contactLink} ${styles.github}`}
								whileHover={{ y: -3 }}
								whileTap={{ scale: 0.97 }}
							>
								<FaGithub className={styles.contactIcon} />
								<span>GitHub</span>
							</motion.a>
						</li>
					</ul>
				</motion.section>
			</motion.section>
		</div>
	);
}
