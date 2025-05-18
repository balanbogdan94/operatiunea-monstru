// components/SocialMediaIcons.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.css';
import appInsights from '@/analytics/appInsights';

const SocialMediaIcons = () => {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		appInsights.trackEvent({
			name: 'SocialMediaIconClick',
			properties: {
				externalName: event.currentTarget.id,
				link: event.currentTarget.href,
			},
		});
	};

	return (
		<ul className={styles.socialMediaIcons}>
			<li>
				<a
					id='facebook'
					onClick={handleClick}
					href='https://www.facebook.com/profile.php?id=61567629037674'
					target='_blank'>
					<FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
				</a>
			</li>
			<li>
				<a
					id='instagram'
					onClick={handleClick}
					href='https://www.instagram.com/operatiunea.monstrul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
					target='_blank'>
					<FontAwesomeIcon icon={faInstagram} className={styles.icon} />
				</a>
			</li>
			<li>
				<a
					id='whatsapp'
					onClick={handleClick}
					href='https://api.whatsapp.com/send?phone=40751943516'
					target='_blank'>
					<FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
				</a>
			</li>
			<li>
				<a
					id='tiktok'
					onClick={handleClick}
					href='https://api.whatsapp.com/send?phone=40751943516'
					target='_blank'>
					<FontAwesomeIcon icon={faTiktok} className={styles.icon} />
				</a>
			</li>
		</ul>
	);
};

export default SocialMediaIcons;
