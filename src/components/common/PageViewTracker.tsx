// app/analytics/PageViewTracker.tsx
'use client';

import React, { Suspense } from 'react';
import { useAppInsights } from '@/hooks/useAppInsights';

function PageViewTrackerInner() {
	useAppInsights();
	return null;
}

// Wrapper component with Suspense boundary
export function PageViewTracker() {
	return (
		<Suspense fallback={null}>
			<PageViewTrackerInner />
		</Suspense>
	);
}
