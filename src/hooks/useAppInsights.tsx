import { useEffect } from 'react';
import appInsights from '../analytics/appInsights';
import { usePathname, useSearchParams } from 'next/navigation';

export const useAppInsights = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (typeof window === 'undefined' || !appInsights.trackPageView) return;

		try {
			const url =
				pathname +
				(searchParams?.toString() ? '?' + searchParams.toString() : '');
			appInsights.trackPageView({ name: pathname, uri: url });
		} catch (error) {
			console.error('Error tracking page view:', error);
		}
	}, [pathname, searchParams]);

	return appInsights;
};
