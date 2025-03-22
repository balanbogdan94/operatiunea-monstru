import { position } from '@/model/map-position';
import React from 'react';

export const useDeviceBasedMapLocation = () => {
	const [mapsUrl, setMapsUrl] = React.useState(
		'https://www.google.com/maps/search/?api=1&query=45.667519,25.608705',
	);

	React.useLayoutEffect(() => {
		const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
		const isAndroid = /Android/i.test(navigator.userAgent);

		if (isIOS) {
			setMapsUrl(`comgooglemaps://?q=${position.lat},${position.lng}`);
		} else if (isAndroid) {
			setMapsUrl(`comgooglemaps://?q=${position.lat},${position.lng}`);
		}
	}, []);

	return { mapsUrl };
};
