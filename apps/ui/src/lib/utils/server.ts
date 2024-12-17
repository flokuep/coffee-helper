import { defaults } from '../../generated/fetch-client';

type Fetch = typeof fetch;

async function _init(fetch: Fetch) {
	// set event.fetch on the fetch-client used by @immich/sdk
	// https://kit.svelte.dev/docs/load#making-fetch-requests
	// https://github.com/oazapfts/oazapfts/blob/main/README.md#fetch-options
	defaults.fetch = fetch;
}

export const init = _init;
