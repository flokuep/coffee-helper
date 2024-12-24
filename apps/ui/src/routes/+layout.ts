import { init } from '$lib/utils/server';
import { loadTranslations } from '$lib/i18n';

export const ssr = false;
export const csr = true;

export const load = async ({ fetch }) => {
	let error;
	try {
		await init(fetch);

		await loadTranslations('de'); // keep this just before the `return`
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
