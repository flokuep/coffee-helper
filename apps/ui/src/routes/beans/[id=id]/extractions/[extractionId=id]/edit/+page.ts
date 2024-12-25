import { extractionControllerFindOne } from '../../../../../../generated/fetch-client';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const beanId = Number.parseInt(params.id);
	const extractionId = Number.parseInt(params.extractionId);
	const extraction = await extractionControllerFindOne({ id: extractionId });
	return {
		beanId,
		extraction,
		meta: {
			title: 'Kaffeebohnen'
		}
	};
}) satisfies PageLoad;
