import { beanControllerFindOne } from '../../../generated/fetch-client.js';

export async function load({ params }) {
	const id = Number.parseInt(params.id);
	const bean = await beanControllerFindOne({ id });
	return {
		bean
	};
}
