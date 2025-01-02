<script lang="ts">
	import BeansList from '$lib/components/beans-page/beans-list.svelte';
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
		<AppShellHeader title="Bohnen" action={{ label: 'Neu', href: '/beans/new' }}></AppShellHeader>
	{/snippet}
	<p>Übersicht über alle Bohnen.</p>
	<BeansList beans={data.beans} />
</AppShell>
