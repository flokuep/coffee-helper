<script lang="ts">
	import { t } from '$lib/utils/i18n';
	import { Coffee, Droplets, MessageCircleQuestion, Scale, Settings, Watch } from '@lucide/svelte';
	import type { Extraction } from '../../../generated/fetch-client';
	import ExtractionsListEntry from './extractions-table-entry.svelte';

	interface Props {
		extractions: Extraction[];
	}

	let { extractions }: Props = $props();
</script>

{#if extractions.length > 0}
	<h1 class="mt-5 mb-2 border-b-1 border-yellow-600">{$t('extractions.previous')}</h1>
	<table class="mx-2 w-full table-fixed border-separate border-spacing-y-2 text-sm">
		<thead>
			<tr>
				<th><Settings strokeWidth={1} /></th>
				<th><Scale strokeWidth={1} /></th>
				<th><Watch strokeWidth={1} /></th>
				<th><Coffee strokeWidth={1} /></th>
				<th><Droplets strokeWidth={1} /></th>
				<th><MessageCircleQuestion strokeWidth={1} /> </th>
			</tr>
		</thead>
		<tbody>
			{#each extractions as extraction (extraction.id)}
				<ExtractionsListEntry {extraction} />
			{/each}
		</tbody>
	</table>
	<ul class="pt-2"></ul>
{/if}
