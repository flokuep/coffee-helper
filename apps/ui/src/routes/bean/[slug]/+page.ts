import { beanControllerFindOne } from '../../../generated/fetch-client.js';

export async function load({ params }) {
	const id = params.slug;
	const bean = await beanControllerFindOne({ id });
	return {
		bean
	};
}
