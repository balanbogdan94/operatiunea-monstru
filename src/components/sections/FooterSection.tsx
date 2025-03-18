import styles from './FooterSection.module.css';
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
	return (
		<div className={styles.footerSection}>
			<div className={styles.waveContainer}>
				<svg
					width='100%'
					height='100%'
					id='svg'
					viewBox='0 0 1440 490'
					xmlns='http://www.w3.org/2000/svg'
					className={styles.svgTransition}>
					<path
						d='M 0,600 L 0,150 C 81.00478468899522,181.07177033492823 162.00956937799043,212.14354066985646 256,190 C 349.99043062200957,167.85645933014354 456.96650717703346,92.49760765550238 547,95 C 637.0334928229665,97.50239234449762 710.1244019138758,177.86602870813397 824,189 C 937.8755980861242,200.13397129186603 1092.535885167464,142.03827751196172 1202,124 C 1311.464114832536,105.96172248803828 1375.7320574162682,127.98086124401914 1440,150 L 1440,600 L 0,600 Z'
						stroke='none'
						strokeWidth='0'
						fill='#395e7c'
						fillOpacity='0.53'
						className={styles.path0}
					/>
					<path
						d='M 0,600 L 0,350 C 116.69856459330143,347.22488038277515 233.39712918660285,344.44976076555025 338,341 C 442.60287081339715,337.55023923444975 535.11004784689,333.4258373205742 628,323 C 720.88995215311,312.5741626794258 814.1626794258374,295.84688995215316 890,313 C 965.8373205741626,330.15311004784684 1024.2392344497607,381.18660287081343 1113,393 C 1201.7607655502393,404.81339712918657 1320.8803827751196,377.4066985645933 1440,350 L 1440,600 L 0,600 Z'
						stroke='none'
						strokeWidth='0'
						fill='#395e7c'
						fillOpacity='1'
						className={styles.path1}
					/>
				</svg>
			</div>
			<footer className={styles.footer}>
				{/* Wave SVG */}

				<div className={styles.container}>
					<div className={styles.grid}>
						<div className={styles.section}>
							<div className={styles.brandHeader}>
								<h3 className={styles.brandTitle}>Operatiunea Monstru</h3>
							</div>
							<p className={styles.description}>
								Destinația ta de top pentru echipamente de pescuit de calitate,
								sfaturi de specialitate și cele mai noi tehnici pentru a face
								fiecare excursie de pescuit de neuitat.
							</p>
							<div className={styles.socialLinks}>
								<ul className={styles.socialMediaIcons}>
									<li>
										<a
											href='https://www.facebook.com/profile.php?id=61567629037674'
											target='_blank'>
											<FontAwesomeIcon
												icon={faFacebookF}
												className={styles.icon}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/operatiunea.monstrul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
											target='_blank'>
											<FontAwesomeIcon
												icon={faInstagram}
												className={styles.icon}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://api.whatsapp.com/send?phone=40751943516'
											target='_blank'>
											<FontAwesomeIcon
												icon={faWhatsapp}
												className={styles.icon}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://api.whatsapp.com/send?phone=40751943516'
											target='_blank'>
											<FontAwesomeIcon
												icon={faTiktok}
												className={styles.icon}
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.section}>
							<h3 className={styles.sectionTitle}>Contact</h3>
							<ul className={styles.contactList}>
								<li className={styles.contactItem}>
									{/* <MapPin className={styles.contactIcon} /> */}
									<span className={styles.contactText}>
										Aleea Constructorilor Nr. 4, Brasov, Romania
									</span>
								</li>
								<li className={styles.contactItem}>
									{/* <Phone className={styles.contactIcon} /> */}
									<span className={styles.contactText}>(+40) 751 943 516</span>
								</li>
								<li className={styles.contactItem}>
									{/* <Mail className={styles.contactIcon} /> */}
									<a
										href='mailto:vladtintarean@gmail.com'
										className={styles.contactLink}>
										vladtintarean@gmail.com
									</a>
								</li>
							</ul>
							<div>
								<h4 className={styles.hoursTitle}>Program:</h4>
								<p className={styles.hoursText}>
									Marti - Vineri: 09:00 - 18:00
								</p>
								<p className={styles.hoursText}>Sambata: 10:00 - 14:00</p>
							</div>
						</div>
					</div>
					<div className={styles.copyright}>
						<p className={styles.copyrightText}>
							© {new Date().getFullYear()} Operatiunea Monstru. All rights
							reserved.
							<br />
							Made with ❤️ by Bogdan Balan.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
