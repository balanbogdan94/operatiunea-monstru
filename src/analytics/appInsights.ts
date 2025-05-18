// src/analytics/appInsights.ts
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const INSTRUMENTATION_KEY =
	process.env.NEXT_PUBLIC_AZURE_APP_INSIGHTS_INSTRUMENTATION_KEY ?? '';

const isBrowser = typeof window !== 'undefined';

function generateAnonId(): string {
	if (!isBrowser) return '';

	try {
		const key = 'anonUserId';
		const storedId = localStorage.getItem(key);
		if (storedId) return storedId;

		const newId = crypto.randomUUID();
		localStorage.setItem(key, newId);
		return newId;
	} catch (error) {
		console.error('Error generating anonymous ID:', error);
		return '';
	}
}

let appInsights: ApplicationInsights;

if (isBrowser) {
	appInsights = new ApplicationInsights({
		config: {
			instrumentationKey: INSTRUMENTATION_KEY,
			enableAutoRouteTracking: true,
			enableCorsCorrelation: true,
		},
	});

	appInsights.loadAppInsights();

	// Set user context after initialization
	try {
		const userId = generateAnonId();
		if (userId) {
			appInsights.setAuthenticatedUserContext(userId);
		}
	} catch (error) {
		console.error('Error setting user context:', error);
	}
} else {
	// Server-side stub
	appInsights = {} as ApplicationInsights;
}

export default appInsights;
