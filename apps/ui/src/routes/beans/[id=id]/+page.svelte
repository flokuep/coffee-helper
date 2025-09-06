<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import BeanDetails from '$lib/components/beans-details-page/bean-details.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/i18n.js';

	let { data } = $props();
	let screenLock: WakeLockSentinel | null | undefined = undefined;

	// Set screen lock on entering the page
	afterNavigate(async ({}) => {
		if (isScreenLockSupported()) {
			try {
				screenLock = await navigator.wakeLock.request('screen');
			} catch (error) {
				console.log(`Cannot lock screen: ${error}`);
			}
		}
	});

	// Remove screen lock when leaving the page
	beforeNavigate(async () => {
		if (screenLock) {
			screenLock.release().then(() => {
				screenLock = undefined;
			});
		}
	});

	function isScreenLockSupported(): boolean {
		return 'wakeLock' in navigator;
	}
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
