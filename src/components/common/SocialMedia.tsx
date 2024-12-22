// components/SocialMediaIcons.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.css';

const SocialMediaIcons = () => {
	return (
		<ul className={styles.socialMediaIcons}>
			<li>
				<a href='#'>
					<FontAwesomeIcon
						size='xs'
						fontSize={1}
						height={40}
						icon={faFacebookF}
						className={styles.icon}
					/>
				</a>
			</li>
			<li>
				<a href='#'>
					<FontAwesomeIcon
						height={40}
						icon={faInstagram}
						className={styles.icon}
					/>
				</a>
			</li>
		</ul>
	);
};

export default SocialMediaIcons;
