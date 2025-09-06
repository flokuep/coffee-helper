<script lang="ts">
	import ExtractionForm from '$lib/components/extraxctions-form-page/extraction-form.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/utils/i18n';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<AppShell pageTitle={$t('extractions.edit')}>
	{#snippet header()}
		<AppShellHeader title={$t('extractions.edit')}></AppShellHeader>
	{/snippet}
	<ExtractionForm beanId={data.beanId} extraction={data.extraction}></ExtractionForm>
</AppShell>
