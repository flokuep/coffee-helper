<script lang="ts">
	import type { Extraction } from '../../../generated/fetch-client';

	interface Props {
		extraction: Extraction;
	}

	let { extraction = $bindable() }: Props = $props();
</script>

<li>
	{extraction.in} &middot; {extraction.out} &middot; {extraction.time}
</li>
