<script lang="ts">
	import BeanDetails from '$lib/components/beans-details-page/bean-details.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';

	let { data } = $props();
</script>

<AppShell>
	{#snippet header()}
		<AppShellHeader
			title={data.bean.name}
			action={{ label: 'Brühen', href: `/beans/${data.bean.id}/extractions/new` }}
		></AppShellHeader>
	{/snippet}
	<BeanDetails bean={data.bean} />
</AppShell>
