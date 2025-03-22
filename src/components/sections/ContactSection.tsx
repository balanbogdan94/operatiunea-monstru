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
} from '@fortawesome/free-solid-svg-icons';
import { position } from '@/model/map-position';
import { useDeviceBasedMapLocation } from '@/hooks/useDeviceBasedMapLocation';
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

const ContactSection = () => {
	const { mapsUrl } = useDeviceBasedMapLocation();

	return (
		<section className={styles.contactSection}>
			<motion.svg viewBox='0 0 868 134' xmlns='http://www.w3.org/2000/svg'>
				<motion.path
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
							maxWidth: '80%',
							height: '400px',
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
			<h3>Program de funcționare</h3>
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
			<h2>Contactează-ne</h2>
			<form className={styles.contactForm}>
				<div className={styles.formGroup}>
					<label htmlFor='name'>Nume</label>
					<input type='text' id='name' name='name' required />
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' required />
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='message'>Mesaj</label>
					<textarea id='message' name='message' rows={5} required></textarea>
				</div>
				<button type='submit' className={styles.submitButton}>
					Trimite
				</button>
			</form>
		</section>
	);
};

export default ContactSection;
