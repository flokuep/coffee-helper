<script lang="ts">
	import type { Extraction } from '../../../generated/fetch-client';
	import ExtractionsListEntry from './extractions-list-entry.svelte';

	interface Props {
		extractions: Extraction[];
	}

	let { extractions }: Props = $props();
</script>

<ul>
	{#each extractions as extraction (extraction.id)}
		<ExtractionsListEntry {extraction} />
	{/each}
</ul>
