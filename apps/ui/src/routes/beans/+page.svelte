<script lang="ts">
	import BeansFilter from '$lib/components/beans-page/beans-filter.svelte';
	import BeansList from '$lib/components/beans-page/beans-list.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let filterValue = $state('');
	let filterDecaf = $state(false);

	let filteredBeans = $derived(
		filterValue !== ''
			? data.beans.filter(
					(bean) =>
						bean.name.toLowerCase().includes(filterValue.toLowerCase()) ||
						bean.manufacturer.toLowerCase().includes(filterValue.toLowerCase()) ||
						bean.profile?.toLowerCase().includes(filterValue.toLowerCase())
				)
			: data.beans
	);
</script>

<AppShell>
	{#snippet header()}
		<AppShellHeader title="Bohnen" action={{ label: 'Neu', href: '/beans/new' }}></AppShellHeader>
	{/snippet}
	<BeansFilter bind:value={filterValue} bind:decaf={filterDecaf} />
	<BeansList beans={filteredBeans} />
</AppShell>
