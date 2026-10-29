import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
	id: (() => {
		const match = function match(param: string) {
			return /^\d+$/.test(param);
		};

		return (param) => (match(param) ? param : undefined);
	})()
});
