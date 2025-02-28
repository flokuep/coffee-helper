<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Bean } from '../../../generated/fetch-client';
	import ExtractionDetails from '../beans-details-page/extraction-details.svelte';
	import ExtractionsList from '../beans-details-page/extractions-list.svelte';

	interface Props {
		bean: Bean;
	}

	let { bean }: Props = $props();
</script>

<div>
	<h1>{bean.name}</h1>
	<h2>{bean.manufacturer}</h2>
	<p>{bean.profile}</p>
	<p>{bean.notes}</p>
	{#if bean.extractions.length == 0}
		<p>{$t('extractions.none')}</p>
	{:else}
		<ExtractionDetails extraction={bean.extractions[0]} />
		<ExtractionsList extractions={bean.extractions} />
	{/if}
</div>
