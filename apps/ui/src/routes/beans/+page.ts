import { beanControllerFindAll } from '../../generated/fetch-client.js';
import type { PageLoad } from './$types';

export const load = (async () => {
	const beans = (await beanControllerFindAll()).toSorted(
		(a, b) =>
			Math.max(...b.extractions.map((e) => Date.parse(e.createdAt))) -
			Math.max(...a.extractions.map((e) => Date.parse(e.createdAt)))
	);
	return {
		beans,
		meta: {
			title: 'Kaffeebohnen'
		}
	};
}) satisfies PageLoad;
