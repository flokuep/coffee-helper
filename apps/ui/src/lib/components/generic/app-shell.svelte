<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		header?: Snippet;
		children: Snippet;
		pageTitle?: string;
	};

	const { header, children, pageTitle }: Props = $props();
</script>
<svelte:head>
	{#if pageTitle}
		<title>{pageTitle} | CoffeeHelper</title>
	{:else}
		<title>CoffeeHelper</title>
	{/if}
</svelte:head>
<div class="flex flex-col overflow-hidden">
	{#if header}
		{@render header()}
	{/if}
	<div role="main" class="px-5 pt-3">
		{@render children()}
	</div>
</div>
