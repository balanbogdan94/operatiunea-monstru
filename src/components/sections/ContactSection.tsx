'use client';
import React from 'react';
import styles from './ContactSection.module.css';
import { motion } from 'framer-motion';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faPhone,
	faMailForward,
	faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { position } from '@/model/map-position';
import { useDeviceBasedMapLocation } from '@/hooks/useDeviceBasedMapLocation';
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

const ContactSection = () => {
	const { mapsUrl } = useDeviceBasedMapLocation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	return (
		<section className={styles.contactSection}>
			<motion.svg
				preserveAspectRatio='none'
				viewBox='0 0 868 134'
				xmlns='http://www.w3.org/2000/svg'
				width='100%'
				height='100%'>
				<motion.path
					width='100%'
					d='M0 134C94.2031 62.6385 254.985 15.6285 437.5 15.6285C615.57 15.6285 772.953 60.3768 868 128.83V0.62854L0 0.62854V134Z'
					fill='#395e7c'
				/>
			</motion.svg>
			<h2>Unde ne gasesti</h2>
			<div className={styles.mapContainer}>
				<APIProvider apiKey={apiKey}>
					<Map
						defaultCenter={position}
						defaultZoom={15}
						className={styles.map}
						style={{
							boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
							borderRadius: '10px',
							overflow: 'hidden',
							position: 'relative',
						}}
						mapId='om-947d8959-0ec1-4c04-879f-0885ab92343d'>
						<AdvancedMarker position={position} />
					</Map>
				</APIProvider>
			</div>
			<div className={styles.contactActions}>
				<a className={styles.contactItem} href={mapsUrl}>
					<div className={styles.contactIcon}>
						<FontAwesomeIcon icon={faHouse} />
					</div>
					<span>Aleea Constructorilor Nr. 4</span>
				</a>
				<a className={styles.contactItem} href='tel:+40751943516'>
					<div className={styles.contactIcon}>
						<FontAwesomeIcon icon={faPhone} />
					</div>
					<span>0751 943 516</span>
				</a>
				<a className={styles.contactItem} href='mailto:vladtintarean@gmail.com'>
					<div className={styles.contactIcon}>
						<FontAwesomeIcon icon={faMailForward} />
					</div>
					<span>vladtintarean@gmail.com</span>
				</a>
			</div>
			<div className={styles.contactHours}>
				<h3>Program de funcționare</h3>
				<motion.div
					className={styles.hours}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					<p>
						<b>Marti - Vineri:</b> 09:00 - 18:00
					</p>
					<p>
						<b>Sâmbătă:</b> 10:00 - 14:00
					</p>
					<p>
						<b>Duminică-Luni:</b> Închis
					</p>
				</motion.div>
			</div>
			<div className={styles.contactFormWrapper}>
				<h3>Lasa-ne un mesaj</h3>
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
