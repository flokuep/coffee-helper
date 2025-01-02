<script lang="ts">
	import ExtractionForm from '$lib/components/extraxctions-form-page/extraction-form.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<AppShell>
	{#snippet header()}
		<AppShellHeader title="Extraktion bearbeiten"></AppShellHeader>
	{/snippet}
	<ExtractionForm beanId={data.beanId} extraction={data.extraction}></ExtractionForm>
</AppShell>
