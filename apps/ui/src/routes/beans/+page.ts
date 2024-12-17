import { beanControllerFindAll } from '../../generated/fetch-client.js';

export async function load() {
	const beans = await beanControllerFindAll();
	return {
		beans
	};
}
