import React from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';

const LandingSection = () => {
	return (
		<div className={styles.root}>
			<div style={{ width: '40%', overflow: 'hidden' }}>
				<BrandLogo
					preserveAspectRatio={'true'}
					height={'auto'}
					width={'100%'}
					style={{ width: '100%', height: 'auto' }}
				/>
			</div>
			<div>
				<h1>Operatiunea Monstrul</h1>
				<h2>Magazinul tau de pescuit si outdoor din Brasov</h2>
				<SocialMediaIcons />
			</div>
		</div>
	);
};

export default LandingSection;
