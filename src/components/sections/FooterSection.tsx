import styles from './FooterSection.module.css';
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import {
	faMapPin,
	faPhone,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

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
						d='M 0,500 L 0,125 C 207.6,125.27 415.2,125.53 551,111 C 686.8,96.47 750.8,67.13 887,67 C 1023.2,66.87 1231.6,95.93 1440,125 L 1440,500 L 0,500 Z'
						stroke='none'
						strokeWidth='0'
						fill='#395e7c'
						fillOpacity='0.53'>
						<animate
							attributeName='d'
							dur='8s'
							repeatCount='indefinite'
							values='M 0,500 L 0,125 C 207.6,125.27 415.2,125.53 551,111 C 686.8,96.47 750.8,67.13 887,67 C 1023.2,66.87 1231.6,95.93 1440,125 L 1440,500 L 0,500 Z;
                   M 0,500 L 0,125 C 137.07,142.87 274.13,160.73 426,160 C 577.87,159.27 744.53,139.93 916,131 C 1087.47,122.07 1263.73,123.53 1440,125 L 1440,500 L 0,500 Z;
                   M 0,500 L 0,125 C 128.4,118.87 256.8,112.73 429,118 C 601.2,123.27 817.2,139.93 993,143 C 1168.8,146.07 1304.4,135.53 1440,125 L 1440,500 L 0,500 Z;
                   M 0,500 L 0,125 C 180.67,122.33 361.33,119.67 513,123 C 664.67,126.33 787.33,135.67 937,137 C 1086.67,138.33 1263.33,131.67 1440,125 L 1440,500 L 0,500 Z;
                   M 0,500 L 0,125 C 207.6,125.27 415.2,125.53 551,111 C 686.8,96.47 750.8,67.13 887,67 C 1023.2,66.87 1231.6,95.93 1440,125 L 1440,500 L 0,500 Z;'
						/>
					</path>

					<path
						d='M 0,500 L 0,291 C 118.8,324.47 237.6,357.93 410,343 C 582.4,328.07 808.4,264.73 989,248 C 1169.6,231.27 1304.8,261.13 1440,291 L 1440,500 L 0,500 Z'
						stroke='none'
						strokeWidth='0'
						fill='#395e7c'
						fillOpacity='1'
						className={styles.wave}>
						<animate
							attributeName='d'
							dur='4s'
							repeatCount='indefinite'
							values='
            M 0,500 L 0,291 C 118.8,324.47 237.6,357.93 410,343 C 582.4,328.07 808.4,264.73 989,248 C 1169.6,231.27 1304.8,261.13 1440,291 L 1440,500 L 0,500 Z;
            M 0,500 L 0,291 C 130,253.93 260,216.87 414,233 C 568,249.13 746,318.47 921,337 C 1096,355.53 1268,323.27 1440,291 L 1440,500 L 0,500 Z;
            M 0,500 L 0,291 C 153.07,253.53 306.13,216.07 464,236 C 621.87,255.93 784.53,333.27 948,352 C 1111.47,370.73 1275.73,330.87 1440,291 L 1440,500 L 0,500 Z;
            M 0,500 L 0,291 C 111.87,284.47 223.73,277.93 391,283 C 558.27,288.07 780.93,304.73 965,308 C 1149.07,311.27 1294.53,301.13 1440,291 L 1440,500 L 0,500 Z;
            M 0,500 L 0,291 C 118.8,324.47 237.6,357.93 410,343 C 582.4,328.07 808.4,264.73 989,248 C 1169.6,231.27 1304.8,261.13 1440,291 L 1440,500 L 0,500 Z;'
						/>
					</path>
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
									<FontAwesomeIcon
										icon={faMapPin}
										className={styles.contactIcon}
									/>
									<span className={styles.contactText}>
										Aleea Constructorilor Nr. 4, Brasov, Romania
									</span>
								</li>
								<li className={styles.contactItem}>
									<FontAwesomeIcon
										icon={faPhone}
										className={styles.contactIcon}
									/>
									<span className={styles.contactText}>(+40) 751 943 516</span>
								</li>
								<li className={styles.contactItem}>
									<FontAwesomeIcon
										icon={faEnvelope}
										className={styles.contactIcon}
									/>
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
							Made with ❤️ by{' '}
							<Link href='https://github.com/balanbogdan94' target='_blank'>
								Bogdan Balan
							</Link>
							.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
