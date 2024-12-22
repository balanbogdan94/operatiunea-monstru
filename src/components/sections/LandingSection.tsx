import React from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';

const LandingSection = () => {
	return (
		<div className={styles.root}>
			<BrandLogo
				preserveAspectRatio={'true'}
				style={{ width: '50%', height: 'auto' }}
			/>
			<h1>Operatiunea Monstrul</h1>
			<h2>
				Magazinul tau de pescuit si outdoor din{' '}
				<span className={styles.highlightText}>Brasov!</span>
			</h2>
			<SocialMediaIcons />
		</div>
	);
};

export default LandingSection;
