<script lang="ts">
	import BeanForm from '$lib/components/beans-form-page/bean-form.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';

	let { data } = $props();
</script>

<AppShell>
	{#snippet header()}
		<AppShellHeader title="Bohne bearbeiten"></AppShellHeader>
	{/snippet}
	<BeanForm bean={data.bean} />
</AppShell>
