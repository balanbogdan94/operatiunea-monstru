import React from 'react';
import styles from './AdvantagesSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHiking,
	faTools,
	faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

const AdvantagesSection = () => {
	return (
		<div className={styles.root} style={{ height: '100vh', width: '100%' }}>
			<h2>Descopera ce ti-am pregatit!</h2>
			<ul>
				<li>
					<FontAwesomeIcon icon={faTools} />
					<h3>Echipamente de top</h3>
					<span>
						Undițe, momeli, accesorii şi multe altele, toate de calitate!
					</span>
				</li>
				<li>
					<FontAwesomeIcon icon={faHiking} />
					<h3>Produse pentru aventuri în natură</h3>
					<span>De la îmbrăcăminte outdoor la gadgeturi utile.</span>
				</li>
				<li>
					<FontAwesomeIcon icon={faUserFriends} />

					<h3>Consiliere dedicata</h3>
					<span>
						Echipa noastră pasionată te va ajuta să alegi exact ce îți trebuie!
					</span>
				</li>
			</ul>
		</div>
	);
};

export default AdvantagesSection;
