import { beanControllerFindAll } from '../../../generated/fetch-client.js';
import type { PageLoad } from './$types';

export const load = (async () => {
	const beans = await beanControllerFindAll();
	return {
		beans,
		meta: {
			title: 'Kaffeebohnen'
		}
	};
}) satisfies PageLoad;
