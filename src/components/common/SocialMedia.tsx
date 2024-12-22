// components/SocialMediaIcons.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.css';

const SocialMediaIcons = () => {
	return (
		<ul className={styles.socialMediaIcons}>
			<li>
				<a
					href='https://www.facebook.com/profile.php?id=61567629037674'
					target='_blank'>
					<FontAwesomeIcon
						height={28}
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
						height={28}
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
						height={28}
						icon={faWhatsapp}
						className={styles.icon}
					/>
				</a>
			</li>
		</ul>
	);
};

export default SocialMediaIcons;
