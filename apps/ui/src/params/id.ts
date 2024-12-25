import type { ParamMatcher } from '@sveltejs/kit';

export const match = function match(param: string) {
	console.log(`Test ${param}: ${/^\d+$/.test(param)}`);
	return /^\d+$/.test(param);
} satisfies ParamMatcher;
