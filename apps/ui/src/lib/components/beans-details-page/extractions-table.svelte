<script lang="ts">
	import { t } from '$lib/i18n';
	import {
		Coffee,
		Droplets,
		MessageCircleIcon,
		MessageCircleQuestion,
		Scale,
		Settings,
		Watch
	} from '@lucide/svelte';
	import type { Extraction } from '../../../generated/fetch-client';
	import ExtractionsListEntry from './extractions-table-entry.svelte';

	interface Props {
		extractions: Extraction[];
	}

	let { extractions }: Props = $props();
</script>

{#if extractions.length > 0}
	<h1 class="mt-5 mb-5 border-b-1 border-yellow-600">{$t('extractions.previous')}</h1>
	<table class="w-full table-fixed">
		<thead>
			<tr>
				<th><Settings strokeWidth={1} /></th>
				<th> <Scale strokeWidth={1} /></th>
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
