<script lang="ts">
	import type { Extraction } from '../../../generated/fetch-client';

	interface Props {
		extraction: Extraction;
	}

	let { extraction }: Props = $props();
</script>

<li>
	{extraction.in}g &middot; {extraction.grind} &middot; {extraction.out}g &middot; {extraction.time}s
</li>
