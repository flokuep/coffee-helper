<script lang="ts">
	import { t } from '$lib/i18n';
	import Time from 'svelte-time/Time.svelte';
	import type { Extraction } from '../../../generated/fetch-client';

	interface Props {
		extraction: Extraction;
	}

	let { extraction }: Props = $props();
</script>

<h1 class="mt-5 mb-1 border-b-1 border-yellow-600">
	{$t('extractions.last')}
	<Time relative timestamp={extraction.createdAt}></Time>
</h1>
<p class="pt-2">
	{$t('extractions.in')}: {extraction.in}g &middot; {$t('extractions.grind')}: {extraction.grind}<br
	/>
	{$t('extractions.out')}: {extraction.out}g &middot; {$t('extractions.time')}: {extraction.time}s<br
	/>
	{$t('extractions.flow')}: {$t(`extractions.flowValues.${extraction.flow}`)} &middot; {$t(
		'extractions.profile'
	)}: {$t(`extractions.profileValues.${extraction.profile}`)}
	{#if extraction.nextExtractionHint}
		<br />
		{extraction.nextExtractionHint}
	{/if}
</p>
