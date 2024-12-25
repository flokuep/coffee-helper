import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const beanId = Number.parseInt(params.id);
	return {
		beanId,
		meta: {
			title: 'Kaffeebohnen'
		}
	};
}) satisfies PageLoad;
