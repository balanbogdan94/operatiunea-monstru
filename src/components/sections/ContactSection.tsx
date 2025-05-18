'use client';
import React from 'react';
import styles from './ContactSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faPaperPlane,
	faEnvelope,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useDeviceBasedMapLocation } from '@/hooks/useDeviceBasedMapLocation';
import appInsights from '@/analytics/appInsights';

const ContactSection = () => {
	const { mapsUrl } = useDeviceBasedMapLocation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const targetUrl = event.currentTarget.href;
		appInsights.trackEvent({
			name: 'ContactLinkClick',
			properties: {
				type: event.currentTarget.id,
				link: targetUrl,
			},
		});
	};

	return (
		<section className={styles.contactSection}>
			<h2>Unde ne gasesti</h2>
			<div className={styles.mapContainer}>
				<iframe
					title='Location Map'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.113568226502!2d25.59422!3d45.64855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b7cce0f0001%3A0x9c1e87efe7a2204!2sAleea%20Constructorilor%204%2C%20Bra%C8%99ov%20500388!5e0!3m2!1sen!2sro!4v1715631193450!5m2!1sen!2sro'
					className={styles.mapIframe}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
			<div className={styles.contactActions}>
				<h3>Informații de contact</h3>
				<a
					id='Address'
					onClick={handleLinkClick}
					className={styles.contactItem}
					href={mapsUrl}>
					<div className={styles.contactIcon}>
						<FontAwesomeIcon icon={faLocationDot} />
					</div>
					<span>Aleea Constructorilor Nr. 4</span>
				</a>
				<a
					id='Phone'
					onClick={handleLinkClick}
					className={styles.contactItem}
					href='tel:+40751943516'>
					<div className={styles.contactIcon}>
						<FontAwesomeIcon icon={faPhone} />
					</div>
					<span>0751 943 516</span>
				</a>
				<a
					id='Email'
					className={styles.contactItem}
					onClick={handleLinkClick}
					href='mailto:vladtintarean@gmail.com'>
					<div className={styles.contactIcon}>
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
					<span>vladtintarean@gmail.com</span>
				</a>
				<div className={styles.contactHours}>
					<h4>Program de funcționare</h4>
					<div className={styles.hours}>
						<p>
							<b>Marti - Vineri:</b> 09:00 - 18:00
						</p>
						<p>
							<b>Sâmbătă:</b> 10:00 - 14:00
						</p>
						<p>
							<b>Duminică-Luni:</b> Închis
						</p>
					</div>
				</div>
			</div>

			<div className={styles.contactFormWrapper}>
				<div className={styles.contactTitle}>
					<h3>Lasa-ne un mesaj</h3>
					<p>
						Ai întrebări sau vrei să afli mai multe despre produsele și
						serviciile noastre? Completează formularul și te vom contacta în cel
						mai scurt timp.
					</p>
				</div>
				<form className={styles.contactForm} onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor='name'>Cum te numesti?</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Numele tau'
							required
						/>
						<span className={styles.errorMessage}>
							(Numele este obligatoriu)
						</span>
					</div>
					<div className={styles.formContactMethod}>
						<span>Cum vrei sa te contactam?</span>
						<div className={styles.formGroup}>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='pescarul123@email.com'
								required
							/>
						</div>
						<span>Sau</span>
						<div className={styles.formGroup}>
							<label htmlFor='phone'>Telefon</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								placeholder='07XX XXX XX7'
								required
							/>
						</div>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='message'>Mesajul tau</label>
						<textarea id='message' name='message' rows={5} required></textarea>
						<span className={styles.errorMessage}>
							(Mesajul este obligatoriu)
						</span>
					</div>
					<button type='submit' className={styles.submitButton}>
						Trimite
						<FontAwesomeIcon
							icon={faPaperPlane}
							className={styles.submitIcon}
						/>
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
