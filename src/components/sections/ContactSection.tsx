import React from 'react';
import styles from './ContactSection.module.css';
import { motion } from 'framer-motion';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';

const position: google.maps.LatLngLiteral = { lat: 45.667519, lng: 25.608705 };
const apiKey = process.env.GOOGLE_MAPS_API_KEY ?? '';

const ContactSection = () => {
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
						defaultZoom={10}
						mapId='om-947d8959-0ec1-4c04-879f-0885ab92343d'>
						<AdvancedMarker position={position} />
					</Map>
				</APIProvider>
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

			<h3>Program de funcționare</h3>
			<div className={styles.hours}>
				<p>Luni - Vineri: 09:00 - 18:00</p>
				<p>Sâmbătă: 10:00 - 14:00</p>
				<p>Duminică: Închis</p>
			</div>
		</section>
	);
};

export default ContactSection;
