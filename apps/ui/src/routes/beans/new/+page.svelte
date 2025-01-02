<script lang="ts">
	import BeanForm from '$lib/components/beans-form-page/bean-form.svelte';
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
		<AppShellHeader title="Neue Bohne anlegen"></AppShellHeader>
	{/snippet}
	<BeanForm></BeanForm>
</AppShell>
