<script lang="ts">
	import BeansFilter from '$lib/components/beans-page/beans-filter.svelte';
	import BeansList from '$lib/components/beans-page/beans-list.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/utils/i18n';
	import type { Bean } from '../../generated/fetch-client';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let filterValue = $state('');
	let filterDecaf = $state(false);

	function filter(bean: Bean) {
		return (
			bean.name.toLowerCase().includes(filterValue.toLowerCase()) ||
			bean.manufacturer.toLowerCase().includes(filterValue.toLowerCase()) ||
			bean.profile?.toLowerCase().includes(filterValue.toLowerCase())
		);
	}

	const currentBeans = $derived(data.beans.slice(0, 4).filter(filter));
	const otherBeans = $derived(data.beans.slice(4).filter(filter));
</script>

<AppShell pageTitle={$t('beans.beans')}>
	{#snippet header()}
		<AppShellHeader title={$t('beans.beans')} action={{ label: $t('generic.new'), href: '/beans/new' }}
		></AppShellHeader>
	{/snippet}
	<BeansFilter bind:value={filterValue} bind:decaf={filterDecaf} />
	<h1 class="mt-7 border-b-1 border-yellow-600">{$t('beans.currentBeans')}</h1>
	<BeansList beans={currentBeans} />
	{#if data.beans.length > 5}
		<h1 class="mt-10 border-b-1 border-yellow-600">
			{$t('beans.moreBeans')}
		</h1>
		<BeansList beans={otherBeans} />
	{/if}
</AppShell>
