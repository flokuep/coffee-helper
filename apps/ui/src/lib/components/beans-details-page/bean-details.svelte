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
	{#if bean.profile}
		<p>{$t('beans.profile')}: {bean.profile}</p>
	{/if}
	{#if bean.notes}
		<p>{$t('beans.notes')}:{bean.notes}</p>
	{/if}
	{#if bean.extractions.length == 0}
		<p>{$t('extractions.none')}</p>
	{:else}
		<ExtractionDetails extraction={bean.extractions[0]} />
		<ExtractionsList extractions={bean.extractions.slice(1)} />
	{/if}
</div>
