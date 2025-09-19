<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import ExtractionForm from '$lib/components/extraxctions-form-page/extraction-form.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/utils/i18n';
	import { releaseScreenLock, setScreenLock } from '$lib/utils/screen-lock';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let screenLock: WakeLockSentinel | null | undefined = undefined;

	// Set screen lock on entering the page
	afterNavigate(async ({}) => {
		screenLock = await setScreenLock();
	});

	// Remove screen lock when leaving the page
	beforeNavigate(async () => {
		screenLock = releaseScreenLock(screenLock);
	});
</script>

<AppShell pageTitle={$t('extractions.add')}>
	{#snippet header()}
		<AppShellHeader title={$t('extractions.add')}></AppShellHeader>
	{/snippet}
	<ExtractionForm beanId={data.beanId} lastExtraction={data.lastExtraction}></ExtractionForm>
</AppShell>
