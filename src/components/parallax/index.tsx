import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.css';

export function Parallax() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start']
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	const handleNavClick = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header ref={ref} className={styles.wrapper}>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li>
						<a
							href='#about'
							className={styles.navLink}
							onClick={(e) => handleNavClick(e, 'about')}
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#skills'
							className={styles.navLink}
							onClick={(e) => handleNavClick(e, 'skills')}
						>
							Skills
						</a>
					</li>
					<li>
						<a
							href='#projects'
							className={styles.navLink}
							onClick={(e) => handleNavClick(e, 'projects')}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href='#contacts'
							className={styles.navLink}
							onClick={(e) => handleNavClick(e, 'contacts')}
						>
							Contacts
						</a>
					</li>
				</ul>
			</nav>

			<div className={styles.headerContent}>
				<div className={styles.titleContainer}>
					<motion.h1 style={{ y: textY }} className={styles.title}>
						Ivan Tsebro
					</motion.h1>
					<motion.img
						style={{ y: textY }}
						className={styles.avatar}
						src='/me.jpg'
						alt='Ivan Tsebro'
					/>
				</div>
			</div>

			<motion.div
				className={styles.background}
				style={{
					backgroundImage: `url(/image-full.png)`,
					y: backgroundY
				}}
			/>

			<div
				className={styles.foreground}
				style={{
					backgroundImage: `url(/image-bottom.png)`
				}}
			/>
		</header>
	);
}
