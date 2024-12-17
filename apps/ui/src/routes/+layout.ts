import { init } from '$lib/utils/server';

export const ssr = false;
export const csr = true;

export const load = async ({ fetch }) => {
	let error;
	try {
		await init(fetch);
	} catch (initError) {
		error = initError;
	}

	return {
		error,
		meta: {
			title: 'Coffee Helper'
		}
	};
};
