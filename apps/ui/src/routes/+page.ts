import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;
export const csr = true;

export const load = (async () => {
	try {
		redirect(302, '/beans');
		/*
        const authenticated = await loadUser();
		if (authenticated) {
			redirect(302, AppRoute.PHOTOS);
		}*/

		/*
		const { isInitialized } = get(serverConfig);
		if (isInitialized) {
			// Redirect to login page if there exists an admin account (i.e. server is initialized)
			redirect(302, AppRoute.AUTH_LOGIN);
		}*/

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (redirectError: any) {
		if (redirectError?.status === 302) {
			throw redirectError;
		}
	}

	return {
		meta: {
			title: 'Hallo', // t('welcome') + ' 🎉',
			description: 'Beschreibung' //t('immich_web_interface')
		}
	};
}) satisfies PageLoad;
