<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Extraction } from '../../../generated/fetch-client';
	import ExtractionsListEntry from './extractions-list-entry.svelte';

	interface Props {
		extractions: Extraction[];
	}

	let { extractions }: Props = $props();
</script>

{#if extractions.length > 0}
	<h1 class="mt-5 mb-1 border-b-1 border-yellow-600">{$t('extractions.previous')}</h1>
	<ul class="pt-2">
		{#each extractions as extraction (extraction.id)}
			<ExtractionsListEntry {extraction} />
		{/each}
	</ul>
{/if}
