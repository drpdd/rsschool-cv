import styles from './styles.module.css';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<span className={styles.copyright}>© {new Date().getFullYear()}</span>

				<a
					href='https://rs.school/js/'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.footerLink}
				>
					<img src='/rs-school-logo.svg' alt='RS School Logo' className={styles.rsLogo} />
				</a>
			</div>
		</footer>
	);
}
