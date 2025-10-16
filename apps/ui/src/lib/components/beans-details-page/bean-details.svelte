<script lang="ts">
	import { t } from '$lib/utils/i18n';
	import type { Bean } from '../../../generated/fetch-client';
	import ExtractionDetails from './extraction-details.svelte';
	import ExtractionsTable from './extractions-table.svelte';

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
		<ExtractionsTable extractions={bean.extractions.slice(1)} />
	{/if}
	<p class="text-center mt-5">
		<a class="text-sm" href={`/beans/${bean.id}/edit`}>{$t("generic.edit")}</a>
	</p>
</div>
