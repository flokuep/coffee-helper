import { extractionControllerFindAllForBean } from '../../../../../generated/fetch-client';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const beanId = Number.parseInt(params.id);
	const extractions = await extractionControllerFindAllForBean({ beanId: beanId });

	const lastExtraction =
		extractions.length === 0
			? undefined
			: extractions.reduce((prev, cur) => {
					if (prev && prev.createdAt > cur.createdAt) {
						return prev;
					} else {
						return cur;
					}
				});
	return {
		beanId,
		lastExtraction,
		meta: {
			title: 'Kaffeebohnen'
		}
	};
}) satisfies PageLoad;
