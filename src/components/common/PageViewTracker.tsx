// app/analytics/PageViewTracker.tsx
'use client';

import { useAppInsights } from '@/hooks/useAppInsights';

export function PageViewTracker() {
	useAppInsights();
	return null;
}
