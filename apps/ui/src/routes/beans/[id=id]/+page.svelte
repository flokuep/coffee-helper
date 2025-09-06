<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import BeanDetails from '$lib/components/beans-details-page/bean-details.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/utils/i18n.js';
	import { releaseScreenLock, setScreenLock } from '$lib/utils/screen-lock.js';

	let { data } = $props();
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

<AppShell pageTitle={`${data.bean.name}, ${data.bean.manufacturer}`}>
	{#snippet header()}
		<AppShellHeader
			title={`${data.bean.name}, ${data.bean.manufacturer}`}
			action={{ label: $t('beans.brew'), href: `/beans/${data.bean.id}/extractions/new` }}
		></AppShellHeader>
	{/snippet}
	<BeanDetails bean={data.bean} />
</AppShell>
