import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export function ScrollArrow() {
	const [visible, setVisible] = useState(true);

	const scrollToNextSection = () => {
		const documentHeight = document.documentElement.scrollHeight;

		const sections = Array.from(document.querySelectorAll('section'));
		const currentSectionIndex = sections.findIndex((section) => {
			const rect = section.getBoundingClientRect();
			return rect.top <= 100 && rect.bottom >= 100;
		});

		if (currentSectionIndex < sections.length - 1) {
			sections[currentSectionIndex + 1].scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		} else {
			window.scrollTo({
				top: documentHeight,
				behavior: 'smooth'
			});
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const isBottom =
				window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
			setVisible(!isBottom);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			className='scroll-arrow'
			initial={{ opacity: 0 }}
			animate={{
				opacity: visible ? 1 : 0,
				y: [0, 10, 0]
			}}
			transition={{
				y: {
					repeat: Infinity,
					duration: 2,
					ease: 'easeInOut'
				},
				opacity: { duration: 0.5 }
			}}
			onClick={scrollToNextSection}
			style={{
				position: 'fixed',
				top: '5%',
				right: '5%',
				transform: 'translateX(-50%)',
				cursor: 'pointer',
				zIndex: 1000
			}}
		>
			<KeyboardArrowDown
				sx={{
					fontSize: '5rem',
					color: 'primary.main',
					filter: 'drop-shadow(0 0 8px rgba(76, 175, 80, 0.6))',
					transition: 'transform 0.3s ease'
				}}
			/>
		</motion.div>
	);
}
