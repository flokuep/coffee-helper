<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		header?: Snippet;
		children: Snippet;
	};

	const { header, children }: Props = $props();
</script>

<div class="flex flex-col overflow-hidden">
	{#if header}
		<header class="border-b border-gray-200 dark:border-gray-800">
			{@render header()}
		</header>
	{/if}
	{@render children()}
</div>
