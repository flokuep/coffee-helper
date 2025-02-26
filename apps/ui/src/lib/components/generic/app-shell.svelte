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
		{@render header()}
	{/if}
	{@render children()}
</div>
