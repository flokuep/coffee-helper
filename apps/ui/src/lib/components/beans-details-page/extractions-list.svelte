<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Extraction } from '../../../generated/fetch-client';
	import ExtractionsListEntry from './extractions-list-entry.svelte';

	interface Props {
		extractions: Extraction[];
	}

	let { extractions }: Props = $props();
</script>

<h1 class="border-b-1 border-yellow-600 pt-3 pb-1">{$t('extractions.previous')}</h1>
<ul class="pt-2">
	{#each extractions as extraction (extraction.id)}
		<ExtractionsListEntry {extraction} />
	{/each}
</ul>
